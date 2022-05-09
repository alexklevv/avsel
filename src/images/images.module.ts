import { Module } from '@nestjs/common';
import { ImagesService } from './images.service';
import { ImagesController } from './images.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {Image, ImageSchema} from "./schemas/image.schema";
import {Offer, OfferSchema} from "../cars/schemas/offer.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Image.name, schema: ImageSchema }]),
    MongooseModule.forFeature([{ name: Offer.name, schema: OfferSchema }]),
  ],
  controllers: [ImagesController],
  providers: [ImagesService]
})
export class ImagesModule {}
