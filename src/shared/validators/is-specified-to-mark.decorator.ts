import {registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface} from 'class-validator';
import {InjectModel} from "@nestjs/mongoose";
import {Model, ModelDocument} from "../../common/schemas/model.schema";
import {Model as MongooseModel} from "mongoose";

export function IsSpecifiedToMark(property: string, validationOptions?: ValidationOptions) {
    return (object: any, propertyName: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [property],
            validator: IsSpecifiedToMarkConstraint,
        });
    };
}

@ValidatorConstraint({name: 'IsSpecifiedToMark', async: true})
export class IsSpecifiedToMarkConstraint implements ValidatorConstraintInterface {
    constructor(
        @InjectModel(Model.name) private modelModel: MongooseModel<ModelDocument>,
    ) {}

    async validate(value: string, args: ValidationArguments): Promise<boolean> {
        const [relatedPropertyName] = args.constraints;
        const relatedValue = (args.object as any)[relatedPropertyName];
        const model = await this.modelModel.findOne({id: value}).exec();

        if(model){
            return model.markId === relatedValue;
        } else {
            return true;
        }
    }

    defaultMessage(args: ValidationArguments) {
        return 'specified model does not match specified mark';
    }

}