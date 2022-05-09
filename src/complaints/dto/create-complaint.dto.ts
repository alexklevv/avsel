import {IsNotEmpty, IsString} from "class-validator";
import {IsMongoIdObject} from "../../shared/validators/is-mongo-id-object.decorator";
import {IsOfferExists} from "../../shared/validators/is-offer-exists.decorator";

export class CreateComplaintDto {
    @IsNotEmpty()
    @IsString()
    @IsMongoIdObject()
    @IsOfferExists()
    readonly offerObjectId: string;

    @IsNotEmpty()
    @IsString()
    readonly content: string;
}
