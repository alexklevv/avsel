import {registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface} from 'class-validator';
import {InjectModel} from "@nestjs/mongoose";
import {Model as MongooseModel} from "mongoose";
import {Generation, GenerationDocument} from "../../common/schemas/generation.schema";

export function IsSpecifiedToModel(property: string, validationOptions?: ValidationOptions) {
    return (object: any, propertyName: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [property],
            validator: IsSpecifiedToModelConstraint,
        });
    };
}

@ValidatorConstraint({name: 'IsSpecifiedToModel', async: true})
export class IsSpecifiedToModelConstraint implements ValidatorConstraintInterface {
    constructor(
        @InjectModel(Generation.name) private generationModel: MongooseModel<GenerationDocument>,
    ) {}

    async validate(value: string, args: ValidationArguments): Promise<boolean> {
        const [relatedPropertyName] = args.constraints;
        const relatedValue = (args.object as any)[relatedPropertyName];
        const generation = await this.generationModel.findOne({id: value}).exec();

        if(generation){
            return generation.modelId === relatedValue;
        } else{
            return true;
        }
    }

    defaultMessage(args: ValidationArguments) {
        return 'specified generation does not match specified model';
    }

}