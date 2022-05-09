import {Controller, Get, Param, UseGuards, Req, Patch} from '@nestjs/common';
import { UsersService } from './users.service';
import {UserResponseInterface} from "./types/user-response.interface";
import {UserRequestInterface} from "./types/user-request.interface";
import {AccessTokenGuard} from "../auth/guards/access-token.guard";
import {AdminRoleGuard} from "../auth/guards/admin-role.guard";
import {EditUserDto} from "./dto/edit-user.dto";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @UseGuards(
    AccessTokenGuard,
    AdminRoleGuard
  )
  async findAll() {
    const users = await this.usersService.findAll();
    return this.usersService.buildUsersResponse(users);
  }

  @Get('current')
  @UseGuards(AccessTokenGuard)
  findCurrent(@Req() req: UserRequestInterface): UserResponseInterface {
    const user = this.usersService.findCurrent(req);
    return this.usersService.buildUserResponse(user);
  }

  @Patch('current')
  @UseGuards(AccessTokenGuard)
  async editCurrent(@Req() req: UserRequestInterface, editUserDto: EditUserDto): Promise<UserResponseInterface> {
    const user = await this.usersService.editCurrent(req, editUserDto);
    return this.usersService.buildUserResponse(user);
  }

  @Get(':id')
  @UseGuards(AccessTokenGuard)
  async findOne(@Param('id') objectId: string): Promise<UserResponseInterface> {
    const user = await this.usersService.findOne(objectId);
    return this.usersService.buildUserResponse(user);
  }

}
