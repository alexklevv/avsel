import {
    registerDecorator,
    ValidationArguments,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface
} from 'class-validator';
import {InjectModel} from "@nestjs/mongoose";
import {Model as MongooseModel} from "mongoose";
import {Model, ModelDocument} from "../../common/schemas/model.schema";

export function IsSpecifiedModelExists(validationOptions?: ValidationOptions) {
    return (object: any, propertyName: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsSpecifiedModelExistsConstraint,
        });
    };
}

@ValidatorConstraint({name: 'IsSpecifiedModelExists', async: true})
export class IsSpecifiedModelExistsConstraint implements ValidatorConstraintInterface {
    constructor(
        @InjectModel(Model.name) private modelModel: MongooseModel<ModelDocument>,
    ) {}

    async validate(value: string, args: ValidationArguments): Promise<boolean> {
        const model = await this.modelModel.findOne({id: value}).exec();
        return !!model;
    }

    defaultMessage(args: ValidationArguments) {
        return 'specified model does not exists';
    }

}