import {Controller, Post, Body, HttpCode, HttpStatus, Get, Req} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from "../users/users.service";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { UserResponseInterface } from "../users/types/user-response.interface";
import { LoginUserDto } from "../users/dto/login-user.dto";
import { LoginResponseInterface } from "./types/login-response.interface";
import {UserRequestInterface} from "../users/types/user-request.interface";

@Controller('auth')
export class AuthController {
  constructor(
      private readonly authService: AuthService,
      private readonly userService: UsersService,
  ) {}

  @Post('signup')
  async create(
      @Body('user') createUserDto: CreateUserDto,
  ): Promise<UserResponseInterface> {
    const user = await this.authService.createUser(createUserDto);
    return this.userService.buildUserResponse(user);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  async login(
      @Body('user') loginUserDto: LoginUserDto,
  ): Promise<LoginResponseInterface> {
    return await this.authService.login(loginUserDto);
  }

  @Get('token')
  token(@Req() req: UserRequestInterface): LoginResponseInterface {
    return this.authService.createNewTokensPair(req);
  }
}
