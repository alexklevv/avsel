import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { RoleSeed } from "../../users/seeds/role.seed";
import { MongooseModule } from "@nestjs/mongoose";
import { Role, RoleSchema } from "../../users/schemas/role.schema";
import { UserSeed } from "../../users/seeds/user.seed";
import { User, UserSchema } from "../../users/schemas/user.schema";
import {Mark, MarkSchema} from "../../common/schemas/mark.schema";
import {Model, ModelSchema} from "../../common/schemas/model.schema";
import {Generation, GenerationSchema} from "../../common/schemas/generation.schema";
import {MarkSeed} from "../../common/seeds/mark.seed";
import {ModelSeed} from "../../common/seeds/model.seed";
import {GenerationSeed} from "../../common/seeds/generation.seed";
import {Status, StatusSchema} from "../../cars/schemas/status.schema";
import {StatusSeed} from "../../cars/seeds/status.seed";

@Module({
    imports: [
        CommandModule,
        MongooseModule.forFeature([{ name: Role.name, schema: RoleSchema }]),
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
        MongooseModule.forFeature([{ name: Mark.name, schema: MarkSchema }]),
        MongooseModule.forFeature([{ name: Model.name, schema: ModelSchema }]),
        MongooseModule.forFeature([{ name: Generation.name, schema: GenerationSchema }]),
        MongooseModule.forFeature([{ name: Status.name, schema: StatusSchema }]),
    ],
    providers: [RoleSeed, UserSeed, MarkSeed, ModelSeed, GenerationSeed, StatusSeed],
    exports: [RoleSeed, UserSeed, MarkSeed, ModelSeed, GenerationSeed, StatusSeed],
})
export class SeedsModule {}