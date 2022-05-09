import {registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface} from 'class-validator';
import {InjectModel} from "@nestjs/mongoose";
import {Model as MongooseModel} from "mongoose";
import {Mark, MarkDocument} from "../../common/schemas/mark.schema";

export function IsSpecifiedMarkExists(validationOptions?: ValidationOptions) {
    return (object: any, propertyName: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsSpecifiedMarkExistsConstraint,
        });
    };
}

@ValidatorConstraint({name: 'IsSpecifiedMarkExists', async: true})
export class IsSpecifiedMarkExistsConstraint implements ValidatorConstraintInterface {
    constructor(
        @InjectModel(Mark.name) private markModel: MongooseModel<MarkDocument>,
    ) {}

    async validate(value: string, args: ValidationArguments): Promise<boolean> {
        const mark = await this.markModel.findOne({id: value}).exec();
        return !!mark;
    }

    defaultMessage(args: ValidationArguments) {
        return 'specified mark does not exists';
    }

}