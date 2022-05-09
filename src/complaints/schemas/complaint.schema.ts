import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose, {Document} from 'mongoose';
import {Type} from "class-transformer";
import {User} from "../../users/schemas/user.schema";
import {Offer} from "../../cars/schemas/offer.schema";

export type ComplaintDocument = Complaint & Document;

@Schema({timestamps: true})
export class Complaint {

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: Complaint.name})
    @Type(() => Offer)
    offer: Offer;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: Complaint.name})
    @Type(() => User)
    reporter: User;

    @Prop()
    content: string;
}

export const ComplaintSchema = SchemaFactory.createForClass(Complaint);