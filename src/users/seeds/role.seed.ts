import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from "@nestjs/mongoose";
import { Role, RoleDocument } from "../schemas/role.schema";
import { Role as RoleEnum } from "../enums/role.enum";

@Injectable()
export class RoleSeed {
    constructor(
        @InjectModel(Role.name) private roleModel: Model<RoleDocument>
    ) { }

    @Command({ command: 'create:role', describe: 'create a role' })
    async create() {
        const createdAdminRole = new this.roleModel({
            name_en: RoleEnum.Admin
        });
        const createdUserRole = new this.roleModel({
           name_en: RoleEnum.User
        });
        await createdAdminRole.save();
        await createdUserRole.save();
        console.log('created roles: ', createdAdminRole, createdUserRole);
    }
}