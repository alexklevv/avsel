import {
    registerDecorator,
    ValidationArguments,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface
} from 'class-validator';
import {InjectModel} from "@nestjs/mongoose";
import {Model as MongooseModel} from "mongoose";
import {Favourite, FavouriteDocument} from "../../account/schemas/favourite.schema";
import {Offer, OfferDocument} from "../../cars/schemas/offer.schema";
import {ExtendedValidationArguments} from "../types/extended-validation-arguments.interface";
import {REQUEST_CONTEXT} from "../interceptors/inject-user.interceptor";

export function IsOfferNotInFavorites(validationOptions?: ValidationOptions) {
    return (object: any, propertyName: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsOfferNotInFavoritesConstraint,
        });
    };
}

@ValidatorConstraint({name: 'IsOfferNotInFavorites', async: true})
export class IsOfferNotInFavoritesConstraint implements ValidatorConstraintInterface {
    constructor(
        @InjectModel(Favourite.name) private favouriteModel: MongooseModel<FavouriteDocument>,
        @InjectModel(Offer.name) private offerModel: MongooseModel<OfferDocument>,
    ) {
    }

    async validate(value: string, args: ExtendedValidationArguments): Promise<boolean> {
        const userFromRequest = args?.object[REQUEST_CONTEXT].user;
        let offer: Offer;
        let favourite: Favourite;
        try {
            offer = await this.offerModel.findOne({_id: value}).exec();
            favourite = await this.favouriteModel.findOne({offer: offer, user: userFromRequest}).exec();
            return !favourite;
        } catch (e) {
            return true;
        }
    }

    defaultMessage(args: ValidationArguments) {
        return 'specified offer is already favourite';
    }

}