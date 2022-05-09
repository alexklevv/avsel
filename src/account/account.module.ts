import {Module} from '@nestjs/common';
import {AccountService} from './account.service';
import {AccountController} from './account.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {Offer, OfferSchema} from "../cars/schemas/offer.schema";
import {User, UserSchema} from "../users/schemas/user.schema";
import {Favourite, FavouriteSchema} from "./schemas/favourite.schema";
import {CarsService} from "../cars/cars.service";
import {IsOfferExistsConstraint} from "../shared/validators/is-offer-exists.decorator";
import {IsOfferInFavoritesConstraint} from "../shared/validators/is-offer-in-favourites.decorator";
import {IsOfferNotInFavoritesConstraint} from "../shared/validators/is-offer-not-in-favourites.decorator";
import {Status, StatusSchema} from "../cars/schemas/status.schema";
import {Image, ImageSchema} from "../images/schemas/image.schema";
import {Mark, MarkSchema} from "../common/schemas/mark.schema";
import {Model, ModelSchema} from "../common/schemas/model.schema";
import {Generation, GenerationSchema} from "../common/schemas/generation.schema";
import {IsMongoIdObjectConstraint} from "../shared/validators/is-mongo-id-object.decorator";

@Module({
    imports: [
        MongooseModule.forFeature([{name: Favourite.name, schema: FavouriteSchema}]),
        MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
        MongooseModule.forFeature([{name: Offer.name, schema: OfferSchema}]),
        MongooseModule.forFeature([{name: Status.name, schema: StatusSchema}]),
        MongooseModule.forFeature([{name: Image.name, schema: ImageSchema}]),
        MongooseModule.forFeature([{name: Mark.name, schema: MarkSchema}]),
        MongooseModule.forFeature([{name: Model.name, schema: ModelSchema}]),
        MongooseModule.forFeature([{name: Generation.name, schema: GenerationSchema}]),
    ],
    controllers: [AccountController],
    providers: [
        AccountService,
        CarsService,
        IsOfferExistsConstraint,
        IsOfferInFavoritesConstraint,
        IsOfferNotInFavoritesConstraint,
        IsMongoIdObjectConstraint
    ]
})
export class AccountModule {
}
