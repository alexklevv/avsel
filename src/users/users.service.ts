import {Injectable, Req} from '@nestjs/common';
import {User, UserDocument} from "./schemas/user.schema";
import {UserResponseInterface} from "./types/user-response.interface";
import {UsersResponseInterface} from "./types/users-response.interface";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {UserRequestInterface} from "./types/user-request.interface";
import {EditUserDto} from "./dto/edit-user.dto";
import {Role, RoleDocument} from "./schemas/role.schema";

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        @InjectModel(Role.name) private roleModel: Model<RoleDocument>
    ) {
    }

    async findAll(): Promise<User[]> {
        return await this.userModel.find().exec();
    }

    async findOne(objectId: string): Promise<User> {
        return await this.userModel.findById(objectId).populate('role').exec();
    }

    findCurrent(@Req() req: UserRequestInterface): User {
        return req.user;
    }

    async editCurrent(@Req() req: UserRequestInterface, editUserDto: EditUserDto): Promise<User> {
        let editParams = {};
        let role;
        role = editUserDto.roleObjectId ? await this.roleModel.findById(editUserDto.roleObjectId).exec() : null;
        if(role){
            editParams['role'] = role;
        }
        if(editUserDto.email){
            editParams['email'] = editUserDto.email;
        }
        if(editUserDto.firstName){
            editParams['firstName'] = editUserDto.firstName;
        }
        if(editUserDto.lastName){
            editParams['lastName'] = editUserDto.lastName;
        }
        if(editUserDto.phoneNumber){
            editParams['phoneNumber'] = editUserDto.phoneNumber;
        }
        await this.userModel.updateOne({...req.user}, {...editParams}).exec();
        return this.userModel.findOne({...req.user}).exec();
    }

    buildUserResponse(user: User): UserResponseInterface {
        return {user: user};
    }

    buildUsersResponse(users: User[]): UsersResponseInterface {
        return {users: users};
    }
}
