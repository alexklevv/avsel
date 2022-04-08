import {HttpException, HttpStatus, Injectable, Req} from '@nestjs/common';
import {CreateUserDto} from "../users/dto/create-user.dto";
import {User, UserDocument} from "../users/schemas/user.scema";
import {InjectModel} from "@nestjs/mongoose";
import {Role, RoleDocument} from "../users/schemas/role.schema";
import {Model} from "mongoose";
import {LoginUserDto} from "../users/dto/login-user.dto";
import {LoginResponseInterface} from "./types/login-response.interface";
import { Role as RoleEnum } from "../users/enums/role.enum";
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import {UserRequestInterface} from "../users/types/user-request.interface";

@Injectable()
export class AuthService {
  constructor(
      @InjectModel(Role.name) private roleModel: Model<RoleDocument>,
      @InjectModel(User.name) private userModel: Model<UserDocument>
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const errorResponse = {
      errors: {},
    };
    const userByEmail = await this.userModel.findOne({
      email: createUserDto.email,
    });
    const userByPhoneNumber = await this.userModel.findOne({
      phoneNumber: createUserDto.phoneNumber,
    });

    if (userByEmail) {
      errorResponse.errors['email'] = 'has already been taken';
    }

    if (userByPhoneNumber) {
      errorResponse.errors['phoneNumber'] = 'has already been taken';
    }
    if (userByEmail || userByPhoneNumber) {
      throw new HttpException(errorResponse, HttpStatus.FORBIDDEN);
    }
    const userRole = await this.roleModel.findOne({ name_en: RoleEnum.User });
    const newUser = new this.userModel({ ...createUserDto, role: userRole });
    return await newUser.save();
  }

  async login(loginUserDto: LoginUserDto): Promise<LoginResponseInterface> {
    const errorResponse = {
      errors: {
        'email or password': 'is invalid',
      },
    };

    const user = await this.userModel.findOne(
        {
          email: loginUserDto.email,
        }
    );

    if (!user) {
      throw new HttpException(errorResponse, HttpStatus.FORBIDDEN);
    }

    const isPasswordCorrect = await bcrypt.compare(
        loginUserDto.password,
        user.password,
    );

    if (!isPasswordCorrect) {
      throw new HttpException(errorResponse, HttpStatus.FORBIDDEN);
    }

    delete user.password;
    return {
      accessToken: this.generateAccessToken(user),
      refreshToken: this.generateRefreshToken(user),
    };
  }

  createNewTokensPair(@Req() req: UserRequestInterface): LoginResponseInterface {
    return {
      accessToken: this.generateAccessToken(req.user),
      refreshToken: this.generateRefreshToken(req.user),
    };
  }

  generateAccessToken(user: User): string {
    return jwt.sign(
        {
          id: user['_id'],
          email: user.email,
        },
        'at_secret',
        {
          expiresIn: '1m',
        }
    );
  }

  generateRefreshToken(user: User): string {
    return jwt.sign(
        {
          id: user['_id'],
          email: user.email,
        },
        'rt_secret',
        {
          expiresIn: '7d',
        }
    );
  }
}
