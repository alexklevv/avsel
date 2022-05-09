import {IsEmail, IsOptional, IsString} from "class-validator";
import {IsMongoIdObject} from "../../shared/validators/is-mongo-id-object.decorator";

export class EditUserDto {
    @IsOptional()
    @IsString()
    readonly firstName?: string;

    @IsOptional()
    @IsString()
    readonly lastName?: string;

    @IsOptional()
    @IsString()
    readonly phoneNumber?: string;

    @IsOptional()
    @IsString()
    @IsEmail()
    readonly email?: string;

    @IsOptional()
    @IsString()
    @IsMongoIdObject()
    readonly roleObjectId?: string;
}