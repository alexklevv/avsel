import {Controller, Delete, Param, Patch, Post, Req, UploadedFile, UseGuards, UseInterceptors} from '@nestjs/common';
import {ImagesService} from './images.service';
import {FileInterceptor} from "@nestjs/platform-express";
import {diskStorage} from "multer";
import {editFileName, imageFileFilter} from "../utilits/file-upload.utilits";
import {UserRequestInterface} from "../users/types/user-request.interface";
import {ImageResponseInterface} from "./types/image-response.interface";
import {AccessTokenGuard} from "../auth/guards/access-token.guard";
import {MessageResponseInterface} from "../common/types/message-response.interface";
import {exec} from "child_process";
import {CarResponseInterface} from "./types/car-response.interface";

@Controller('images')
export class ImagesController {
    constructor(private readonly imagesService: ImagesService) {}

    @UseInterceptors(
        FileInterceptor('image', {
            storage: diskStorage({
                destination: './uploads',
                filename: editFileName,
            }),
            fileFilter: imageFileFilter,
        })
    )
    @Post('/recognize')
    async recognizeCar(
        @UploadedFile() file: Express.Multer.File
    ): Promise<CarResponseInterface> {
        return await this.imagesService.recognizeCarOnImage(file);
    }

    @UseGuards(AccessTokenGuard)
    @UseInterceptors(
        FileInterceptor('image', {
            storage: diskStorage({
                destination: './uploads',
                filename: editFileName,
            }),
            fileFilter: imageFileFilter,
        })
    )
    @Post('cars')
    async uploadImage(
        @Req() req: UserRequestInterface,
        @UploadedFile() file: Express.Multer.File
    ): Promise<ImageResponseInterface> {
        const uploadedImage = await this.imagesService.uploadImage(req, file);
        return this.imagesService.buildImageResponse(uploadedImage);
    }

    @UseGuards(AccessTokenGuard)
    @Delete('cars/:offerId/:imageObjectId')
    async deleteImage(
        @Req() req: UserRequestInterface,
        @Param('offerId') offerId: string,
        @Param('imageObjectId') imageObjectId: string
    ): Promise<MessageResponseInterface> {
        return await this.imagesService.deleteOfferImage(req, +offerId, imageObjectId);
    }

    @UseGuards(AccessTokenGuard)
    @Delete('cars/:imageObjectId')
    async deleteOfferImage(
        @Req() req: UserRequestInterface,
        @Param('imageObjectId') imageObjectId: string
    ): Promise<MessageResponseInterface> {
        return await this.imagesService.deleteImage(req, imageObjectId);
    }

    @UseGuards(AccessTokenGuard)
    @UseInterceptors(
        FileInterceptor('image', {
            storage: diskStorage({
                destination: './uploads',
                filename: editFileName,
            }),
            fileFilter: imageFileFilter,
        })
    )
    @Post('cars/main')
    async uploadMainImage(
        @Req() req: UserRequestInterface,
        @UploadedFile() file: Express.Multer.File
    ): Promise<ImageResponseInterface> {
        const uploadedImage = await this.imagesService.uploadMainImage(req, file);
        return this.imagesService.buildImageResponse(uploadedImage);
    }

    @UseGuards(AccessTokenGuard)
    @UseInterceptors(
        FileInterceptor('image', {
            storage: diskStorage({
                destination: './uploads',
                filename: editFileName,
            }),
            fileFilter: imageFileFilter,
        })
    )
    @Post('cars/cover')
    async uploadCoverImage(
        @Req() req: UserRequestInterface,
        @UploadedFile() file: Express.Multer.File
    ): Promise<ImageResponseInterface> {
        const uploadedImage = await this.imagesService.uploadCoverImage(req, file);
        return this.imagesService.buildImageResponse(uploadedImage);
    }

    @UseGuards(AccessTokenGuard)
    @UseInterceptors(
        FileInterceptor('image', {
            storage: diskStorage({
                destination: './uploads',
                filename: editFileName,
            }),
            fileFilter: imageFileFilter,
        })
    )
    @Patch('cars/main')
    async uploadNewMainImage(
        @Req() req: UserRequestInterface,
        @UploadedFile() file: Express.Multer.File
    ): Promise<ImageResponseInterface> {
        const uploadedImage = await this.imagesService.uploadNewMainImage(req, file);
        return this.imagesService.buildImageResponse(uploadedImage);
    }

    @UseGuards(AccessTokenGuard)
    @UseInterceptors(
        FileInterceptor('image', {
            storage: diskStorage({
                destination: './uploads',
                filename: editFileName,
            }),
            fileFilter: imageFileFilter,
        })
    )
    @Patch('cars/cover')
    async uploadNewCoverImage(
        @Req() req: UserRequestInterface,
        @UploadedFile() file: Express.Multer.File
    ): Promise<ImageResponseInterface> {
        const uploadedImage = await this.imagesService.uploadNewCoverImage(req, file);
        return this.imagesService.buildImageResponse(uploadedImage);
    }
}
