import {IsNotEmpty, IsString, MaxLength} from "class-validator";
import {IsSpecifiedToMark} from "../../shared/validators/is-specified-to-mark.decorator";
import {IsSpecifiedMarkExists} from "../../shared/validators/is-specified-mark-exists.decorator";
import {IsSpecifiedToModel} from "../../shared/validators/is-specified-to-model.decorator";
import {IsSpecifiedModelExists} from "../../shared/validators/is-specified-model-exists.decorator";
import {IsSpecifiedGenerationExists} from "../../shared/validators/is-specified-generation-exists.decorator";

export class CreateOfferDto {
    @IsNotEmpty()
    @IsString()
    @IsSpecifiedMarkExists()
    readonly markId: string;

    @IsNotEmpty()
    @IsString()
    @IsSpecifiedModelExists()
    @IsSpecifiedToMark('markId')
    readonly modelId: string;

    @IsNotEmpty()
    @IsString()
    @IsSpecifiedGenerationExists()
    @IsSpecifiedToModel('modelId')
    readonly generationId: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(20)
    readonly description: string;
}
