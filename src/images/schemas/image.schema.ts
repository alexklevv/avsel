import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {User} from "../../users/schemas/user.schema";
import mongoose from "mongoose";
import {Type} from "class-transformer";

export type ImageDocument = Image & Document;

@Schema({ timestamps: true })
export class Image {
    @Prop()
    name: string;

    @Prop({ default() { return false } })
    isMain: boolean;

    @Prop({ default() { return false } })
    isCover: boolean;

    @Prop({ default() { return false } })
    isRelatedToOffer: boolean

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
    @Type(() => User)
    uploadedBy: User;
}

export const ImageSchema = SchemaFactory.createForClass(Image);