import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose, {Document, Model as MongooseModel} from 'mongoose';
import {Type} from "class-transformer";
import {User} from "../../users/schemas/user.schema";
import {Offer} from "../../cars/schemas/offer.schema";

export type FavouriteDocument = Favourite & Document;

@Schema({ timestamps: true })
export class Favourite {

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Offer.name })
    @Type(() => Offer)
    offer: Offer;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
    @Type(() => User)
    user: User;
}

export const FavouriteSchema = SchemaFactory.createForClass(Favourite);