import {
    registerDecorator,
    ValidationArguments,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface
} from 'class-validator';
import {InjectModel} from "@nestjs/mongoose";
import {Model as MongooseModel} from "mongoose";
import {Offer, OfferDocument} from "../../cars/schemas/offer.schema";

export function IsOfferExists(validationOptions?: ValidationOptions) {
    return (object: any, propertyName: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsOfferExistsConstraint,
        });
    };
}

@ValidatorConstraint({name: 'IsOfferExists', async: true})
export class IsOfferExistsConstraint implements ValidatorConstraintInterface {
    constructor(
        @InjectModel(Offer.name) private offerModel: MongooseModel<OfferDocument>,
    ) {
    }

    async validate(value: string, args: ValidationArguments): Promise<boolean> {
        let offer: Offer;
        try {
            offer = await this.offerModel.findOne({_id: value}).exec();
            return !!offer;
        } catch (e){
            return true;
        }
    }

    defaultMessage(args: ValidationArguments) {
        return 'specified offer not found';
    }

}