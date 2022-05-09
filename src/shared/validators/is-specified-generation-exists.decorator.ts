import {
    registerDecorator,
    ValidationArguments,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface
} from 'class-validator';
import {InjectModel} from "@nestjs/mongoose";
import {Model as MongooseModel} from "mongoose";
import {Generation, GenerationDocument} from "../../common/schemas/generation.schema";

export function IsSpecifiedGenerationExists(validationOptions?: ValidationOptions) {
    return (object: any, propertyName: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsSpecifiedGenerationExistsConstraint,
        });
    };
}

@ValidatorConstraint({name: 'IsSpecifiedGenerationExists', async: true})
export class IsSpecifiedGenerationExistsConstraint implements ValidatorConstraintInterface {
    constructor(
        @InjectModel(Generation.name) private generationModel: MongooseModel<GenerationDocument>,
    ) {}

    async validate(value: string, args: ValidationArguments): Promise<boolean> {
        const generation = await this.generationModel.findOne({id: value}).exec();
        return !!generation;
    }

    defaultMessage(args: ValidationArguments) {
        return 'specified generation does not exists';
    }

}