import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { RoleSeed } from "../../users/seeds/role.seed";
import { MongooseModule } from "@nestjs/mongoose";
import { Role, RoleSchema } from "../../users/schemas/role.schema";
import { UserSeed } from "../../users/seeds/user.seed";
import { User, UserSchema } from "../../users/schemas/user.scema";

@Module({
    imports: [
        CommandModule,
        MongooseModule.forFeature([{ name: Role.name, schema: RoleSchema }]),
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    ],
    providers: [RoleSeed, UserSeed],
    exports: [RoleSeed, UserSeed],
})
export class SeedsModule {}