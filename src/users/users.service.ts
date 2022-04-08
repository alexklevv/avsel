import {Injectable, Req} from '@nestjs/common';
import {User, UserDocument} from "./schemas/user.scema";
import {UserResponseInterface} from "./types/user-response.interface";
import {UsersResponseInterface} from "./types/users-response.interface";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {UserRequestInterface} from "./types/user-request.interface";

@Injectable()
export class UsersService {
  constructor(
      @InjectModel(User.name) private userModel: Model<UserDocument>
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async findOne(objectId: string): Promise<User> {
    return await this.userModel.findById(objectId).populate('role').exec();
  }

  findCurrent(@Req() req: UserRequestInterface): User {
    return req.user;
  }

  buildUserResponse(user: User): UserResponseInterface {
    return { user: user };
  }

  buildUsersResponse(users: User[]): UsersResponseInterface {
    return { users: users };
  }
}
