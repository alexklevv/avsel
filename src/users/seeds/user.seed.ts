import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "../schemas/user.scema";
import { Role as RoleEnum } from "../enums/role.enum";
import { Role, RoleDocument } from "../schemas/role.schema";

@Injectable()
export class UserSeed {
    constructor(
        @InjectModel(Role.name) private roleModel: Model<RoleDocument>,
        @InjectModel(User.name) private userModel: Model<UserDocument>
    ) { }

    @Command({ command: 'create:users', describe: 'create users' })
    async create() {
        const adminRole = await this.roleModel.findOne({ name_en: RoleEnum.Admin });
        const userRole = await this.roleModel.findOne({ name_en: RoleEnum.User });

        const createdAdminUser = new this.userModel({
            firstName: 'Elena',
            lastName: 'Kaminskaya',
            phoneNumber: '+375445771295',
            email: 'lenchikk@gmail.com',
            password: 'poshelnahui',
            role: adminRole,
        });

        const createdUser = new this.userModel({
            firstName: 'Gleb',
            lastName: 'Andreev',
            phoneNumber: '+375447903119',
            email: 'unicode256@yandex.by',
            password: '12345678',
            role: userRole,
        });

        await createdAdminUser.save();
        await createdUser.save();
        console.log('created roles: ', createdAdminUser, createdUser);
    }
}