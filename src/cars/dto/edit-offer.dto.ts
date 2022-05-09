import {IsNotEmpty, IsOptional, IsString, MaxLength} from "class-validator";
import {IsSpecifiedToMark} from "../../shared/validators/is-specified-to-mark.decorator";
import {IsSpecifiedGenerationExists} from "../../shared/validators/is-specified-generation-exists.decorator";
import {IsSpecifiedToModel} from "../../shared/validators/is-specified-to-model.decorator";
import {IsSpecifiedModelExists} from "../../shared/validators/is-specified-model-exists.decorator";
import {IsSpecifiedMarkExists} from "../../shared/validators/is-specified-mark-exists.decorator";
import {IsMongoIdObject} from "../../shared/validators/is-mongo-id-object.decorator";

export class EditOfferDto {
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    @IsSpecifiedMarkExists()
    readonly markId?: string;

    @IsNotEmpty()
    @IsString()
    @IsOptional()
    @IsSpecifiedModelExists()
    @IsSpecifiedToMark('markId')
    readonly modelId?: string;

    @IsNotEmpty()
    @IsString()
    @IsOptional()
    @IsSpecifiedGenerationExists()
    @IsSpecifiedToModel('modelId')
    readonly generationId?: string;

    @IsNotEmpty()
    @IsString()
    @IsOptional()
    @IsMongoIdObject()
    readonly statusObjectId?: string;

    @IsNotEmpty()
    @IsString()
    @IsOptional()
    @MaxLength(20)
    readonly description?: string;
}
