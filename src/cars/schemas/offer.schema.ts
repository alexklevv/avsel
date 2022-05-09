import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose, {Document, Model as MongooseModel} from 'mongoose';
import {Status} from "./status.schema";
import {Type} from "class-transformer";
import {User} from "../../users/schemas/user.schema";
import {Image} from "../../images/schemas/image.schema";
import {Mark} from "../../common/schemas/mark.schema";
import {Model} from "../../common/schemas/model.schema";
import {Generation} from "../../common/schemas/generation.schema";

export type OfferDocument = Offer & Document;

@Schema({ timestamps: true })
export class Offer {

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Mark.name })
    @Type(() => Mark)
    mark: Mark;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Model.name })
    @Type(() => Model)
    model: Model;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Generation.name })
    @Type(() => Generation)
    generation: Generation;

    @Prop()
    description: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Status.name })
    @Type(() => Status)
    status: Status;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
    @Type(() => User)
    seller: User;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: Image.name }] })
    images: Image[];
}

export const OfferSchema = SchemaFactory.createForClass(Offer);