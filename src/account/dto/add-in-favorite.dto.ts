import {IsNotEmpty, IsString} from "class-validator";
import {IsOfferExists} from "../../shared/validators/is-offer-exists.decorator";
import {IsOfferNotInFavorites} from "../../shared/validators/is-offer-not-in-favourites.decorator";
import {IsMongoIdObject} from "../../shared/validators/is-mongo-id-object.decorator";

export class AddInFavoriteDto {
    @IsNotEmpty()
    @IsString()
    @IsMongoIdObject()
    @IsOfferExists()
    @IsOfferNotInFavorites()
    readonly offerObjectId: string;
}