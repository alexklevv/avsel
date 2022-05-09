import {
    registerDecorator,
    ValidationArguments,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface
} from 'class-validator';
import mongoose from "mongoose";

export function IsMongoIdObject(validationOptions?: ValidationOptions) {
    return (object: any, propertyName: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsMongoIdObjectConstraint,
        });
    };
}

@ValidatorConstraint({name: 'IsMongoIdObject'})
export class IsMongoIdObjectConstraint implements ValidatorConstraintInterface {

    validate(value: string, args: ValidationArguments): boolean {
        const valid = mongoose.Types.ObjectId.isValid(value);
        console.log(valid, value);
        return !!valid;
    }

    defaultMessage(args: ValidationArguments) {
        return 'offer id must be object id';
    }

}