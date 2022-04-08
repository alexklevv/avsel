import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Role } from "./role.schema";
import * as mongoose from 'mongoose';
import * as bcrypt from "bcrypt";
import {Type} from "class-transformer";

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
    @Prop()
    firstName: string;

    @Prop()
    lastName: string;

    @Prop()
    phoneNumber: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Role.name })
    @Type(() => Role)
    role: Role;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre<User>('save', async function(next) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
})