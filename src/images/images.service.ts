import {HttpException, HttpStatus, Injectable, Req} from '@nestjs/common';
import {Image, ImageDocument} from "./schemas/image.schema";
import {ImageResponseInterface} from "./types/image-response.interface";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {UserRequestInterface} from "../users/types/user-request.interface";
import {MessageResponseInterface} from "../common/types/message-response.interface";
import {Offer, OfferDocument} from "../cars/schemas/offer.schema";
import {exec} from "child_process";
import {CarResponseInterface} from "./types/car-response.interface";

@Injectable()
export class ImagesService {
    constructor(
        @InjectModel(Image.name) private imageModel: Model<ImageDocument>,
        @InjectModel(Offer.name) private offerModel: Model<OfferDocument>
    ) {
    }

    async recognizeCarOnImage(file: Express.Multer.File): Promise<CarResponseInterface> {
        return new Promise((resolve) => {
            exec(
                `curl -v -F 'use_detector=true' -F 'vehicle_bbox=true' -F 'rotate_pic=0' -F 'lp_version=-1' -F 'view_type=1' -F 'detection_count=0' -F 'upload=@./uploads/${file.filename}' -X POST https://cloud.eyedea.cz/api/v2/cardetect.json?`,
                (error, out) => {
                    if(error) {
                        throw new HttpException('could not recognize car on image', HttpStatus.INTERNAL_SERVER_ERROR);
                    }
                    const result = JSON.parse(out);
                    const mark = result.photos[0].tags[0].make;
                    const model = result.photos[0].tags[0].model;
                    const generation = result.photos[0].tags[0].generation;
                    resolve({car: {mark, model, generation}});
                });
        });
    }

    async uploadImage(
        @Req() req: UserRequestInterface,
        file: Express.Multer.File
    ): Promise<Image> {
        const imagesCount = await this.imageModel
            .count({isRelatedToOffer: false, isCover: false, isMain: false, uploadedBy: req.user}).exec();
        if (imagesCount > 10) {
            throw new HttpException('You can\'t upload more than 10 files', HttpStatus.INTERNAL_SERVER_ERROR);
        }

        const newImage = new this.imageModel({name: file.filename, uploadedBy: req.user});
        return await newImage.save();
    }

    async uploadMainImage(
        @Req() req: UserRequestInterface,
        file: Express.Multer.File
    ): Promise<Image> {
        const existingMainImage = await this.imageModel
            .findOne({isMain: true, isRelatedToOffer: false, uploadedBy: req.user}).exec();
        if (existingMainImage) {
            throw new HttpException('Main image was already uploaded', HttpStatus.INTERNAL_SERVER_ERROR);
        }
        const newImage = new this.imageModel({name: file.filename, isMain: true, uploadedBy: req.user});
        return await newImage.save();
    }

    async uploadNewMainImage(
        @Req() req: UserRequestInterface,
        file: Express.Multer.File
    ): Promise<Image> {
        const existingMainImage = await this.imageModel
            .findOne({isMain: true, isRelatedToOffer: false, uploadedBy: req.user}).exec();
        if (!existingMainImage) {
            throw new HttpException(
                'Main image is not founded in temporary storage',
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
        await this.imageModel
            .updateOne(
                {isMain: true, isRelatedToOffer: false, uploadedBy: req.user},
                {name: file.filename, uploadedBy: req.user}
            ).exec();
        return await this.imageModel
            .findOne({isMain: true, isRelatedToOffer: false, uploadedBy: req.user}).exec();
    }

    async uploadCoverImage(
        @Req() req: UserRequestInterface,
        file: Express.Multer.File
    ): Promise<Image> {
        const existingCoverImage = await this.imageModel
            .findOne({isCover: true, isRelatedToOffer: false, uploadedBy: req.user}).exec();
        if (existingCoverImage) {
            throw new HttpException('Cover image was already uploaded', HttpStatus.INTERNAL_SERVER_ERROR);
        }
        const newImage = new this.imageModel({name: file.filename, isCover: true, uploadedBy: req.user});
        return await newImage.save();
    }

    async uploadNewCoverImage(
        @Req() req: UserRequestInterface,
        file: Express.Multer.File
    ): Promise<Image> {
        const existingCoverImage = await this.imageModel
            .findOne({isCover: true, isRelatedToOffer: false, uploadedBy: req.user}).exec();
        if (!existingCoverImage) {
            throw new HttpException(
                'Cover image is not founded in temporary storage',
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
        await this.imageModel
            .updateOne(
                {isCover: true, isRelatedToOffer: false, uploadedBy: req.user},
                {name: file.filename, uploadedBy: req.user}
            ).exec();
        return await this.imageModel
            .findOne({isCover: true, isRelatedToOffer: false, uploadedBy: req.user}).exec();
    }

    async deleteImage(@Req() req: UserRequestInterface, imageObjectId: string): Promise<MessageResponseInterface> {
        const imageForDelete = await this.imageModel.findOne({
            _id: imageObjectId,
            uploadedBy: req.user,
            isRelatedToOffer: false
        }).exec();
        if (!imageForDelete) {
            throw new HttpException('image not found', HttpStatus.NOT_FOUND);
        }
        if (imageForDelete.isCover || imageForDelete.isMain) {
            throw new HttpException('unable to delete main or cover image', HttpStatus.METHOD_NOT_ALLOWED);
        }
        const deletedImage = await this.imageModel.deleteOne({
            _id: imageObjectId,
            isCover: false,
            isMain: false
        }).exec();
        if (!deletedImage.deletedCount) {
            throw new HttpException('error deleting image occurred', HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return {message: 'image successfully deleted'};
    }

    async deleteOfferImage(
        @Req() req: UserRequestInterface,
        offerId: number,
        imageObjectId: string
    ): Promise<MessageResponseInterface> {
        const imageForDelete = await this.imageModel.findOne({
            _id: imageObjectId,
            isRelatedToOffer: true,
            uploadedBy: req.user
        }).exec();
        if (!imageForDelete) {
            throw new HttpException('image not found', HttpStatus.NOT_FOUND);
        }
        const offer = await this.offerModel.findOne({id: offerId, seller: req.user, images: {$in: [imageForDelete]}});
        if (!offer) {
            throw new HttpException('offer not found', HttpStatus.NOT_FOUND);
        }

        if (imageForDelete.isCover || imageForDelete.isMain) {
            throw new HttpException('unable to delete main or cover image', HttpStatus.METHOD_NOT_ALLOWED);
        }
        if (offer.images.length - 1 === 2) {
            throw new HttpException(
                'You can not delete this image, because offer should contain at least one image except main and cover',
                HttpStatus.BAD_REQUEST
            );
        }
        await this.offerModel.updateOne({id: offerId}, {$pullAll: {images: [imageForDelete]}});
        const deletedImage = await this.imageModel.deleteOne({
            _id: imageObjectId,
            isCover: false,
            isMain: false
        }).exec();
        if (!deletedImage.deletedCount) {
            throw new HttpException('error deleting image occurred', HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return {message: 'image successfully deleted'};
    }

    buildImageResponse(image: Image): ImageResponseInterface {
        return {image: image};
    }
}
