import {IsNotEmpty, IsString} from "class-validator";
import {IsOfferExists} from "../../shared/validators/is-offer-exists.decorator";
import {IsOfferInFavorites} from "../../shared/validators/is-offer-in-favourites.decorator";
import {IsMongoIdObject} from "../../shared/validators/is-mongo-id-object.decorator";

export class DeleteFromFavoritesDto {
    @IsNotEmpty()
    @IsString()
    @IsMongoIdObject()
    @IsOfferExists()
    @IsOfferInFavorites()
    readonly offerObjectId: string;
}