import {HttpException, HttpStatus, Injectable, Req} from '@nestjs/common';
import {CreateOfferDto} from "./dto/create-offer.dto";
import {OfferResponseInterface} from "./types/offer-response.interface";
import {Offer, OfferDocument} from "./schemas/offer.schema";
import {InjectModel} from "@nestjs/mongoose";
import {Image, ImageDocument} from "../images/schemas/image.schema";
import {Model as MongooseModel} from "mongoose";
import {UserRequestInterface} from "../users/types/user-request.interface";
import {Status, StatusDocument} from "./schemas/status.schema";
import {Model, ModelDocument} from "../common/schemas/model.schema";
import {Mark, MarkDocument} from "../common/schemas/mark.schema";
import {Generation, GenerationDocument} from "../common/schemas/generation.schema";
import {OffersResponseInterface} from "./types/offers-response.interface";
import {EditOfferDto} from "./dto/edit-offer.dto";
import {MessageResponseInterface} from "../common/types/message-response.interface";

@Injectable()
export class CarsService {
    constructor(
        @InjectModel(Image.name) private imageModel: MongooseModel<ImageDocument>,
        @InjectModel(Offer.name) private offerModel: MongooseModel<OfferDocument>,
        @InjectModel(Status.name) private statusModel: MongooseModel<StatusDocument>,
        @InjectModel(Model.name) private modelModel: MongooseModel<ModelDocument>,
        @InjectModel(Mark.name) private markModel: MongooseModel<MarkDocument>,
        @InjectModel(Generation.name) private generationModel: MongooseModel<GenerationDocument>,
    ) {
    }

    async createOffer(
        @Req() req: UserRequestInterface,
        createOfferDto: CreateOfferDto
    ): Promise<Offer> {
        const mark = await this.markModel.findOne({id: createOfferDto.markId}).exec();
        const model = await this.modelModel.findOne({id: createOfferDto.modelId}).exec();
        if (createOfferDto.markId !== model.markId) {
            throw new HttpException('specified car model does not match specified car mark', HttpStatus.BAD_REQUEST);
        }
        const generation = await this.generationModel.findOne({id: createOfferDto.generationId}).exec();
        if (createOfferDto.modelId !== generation.modelId) {
            throw new HttpException('specified car generation does not match specified car model', HttpStatus.BAD_REQUEST);
        }
        const offerImages = await this.imageModel.find({isRelatedToOffer: false, isCover: false, isMain: false, uploadedBy: req.user}).exec();
        if(!offerImages.length){
            throw new HttpException('no images uploaded', HttpStatus.INTERNAL_SERVER_ERROR);
        }
        const mainImage = await this.imageModel.findOne({isRelatedToOffer: false, isCover: false, isMain: true, uploadedBy: req.user}).exec();
        if(!mainImage){
            throw new HttpException('no main image uploaded', HttpStatus.INTERNAL_SERVER_ERROR);
        }
        const coverImage = await this.imageModel.findOne({isRelatedToOffer: false, isCover: true, isMain: false, uploadedBy: req.user}).exec();
        if(!coverImage){
            throw new HttpException('no cover image uploaded', HttpStatus.INTERNAL_SERVER_ERROR);
        }
        const allOfferImages = await this.imageModel.find({isRelatedToOffer: false, uploadedBy: req.user}).exec();
        if(!allOfferImages.length){
            throw new HttpException('can not retrieve all images for offer', HttpStatus.NOT_FOUND);
        }
        const onModerationStatus = await this.statusModel.findOne({name_en: 'on moderation'}).exec();
        const newOffer = await new this.offerModel({
            ...createOfferDto,
            mark: mark,
            model: model,
            generation: generation,
            status: onModerationStatus,
            seller: req.user,
            images: allOfferImages
        }).save();
        await this.imageModel
            .updateMany(
                {isRelatedToOffer: false, uploadedBy: req.user},
                {isRelatedToOffer: true}
            ).exec();
        return newOffer;
    }

    async findOffers(): Promise<Offer[]> {
        return await this.offerModel.find()
            .populate({
                path: 'images',
                match: { isMain: true },
                select: 'name'
            })
            .populate({
                path: 'mark',
                select: 'name'
            })
            .populate({
                path: 'model',
                select: 'name'
            })
            .populate({
                path: 'generation',
                select: 'generation'
            })
            .populate({
                path: 'status',
                select: 'name_en'
            })
            .exec();
    }

    async findOffer(offerId: number): Promise<Offer> {
        const offer = await this.offerModel.findOne({id: offerId})
            .populate({
                path: 'images',
                select: 'name'
            })
            .populate({
                path: 'mark',
                select: 'name'
            })
            .populate({
                path: 'model',
                select: 'name'
            })
            .populate({
                path: 'generation',
                select: 'generation'
            })
            .populate({
                path: 'seller',
                select: 'firstName phoneNumber email'
            })
            .populate({
                path: 'status',
                select: 'name_en'
            })
            .exec();
        if(!offer) {
            throw new HttpException('offer not found', HttpStatus.NOT_FOUND);
        }
        return offer;
    }

    async editOffer(@Req() req: UserRequestInterface, offerId: number, editOfferDto: EditOfferDto): Promise<Offer> {
        if(!(await this.offerModel.findOne({id: offerId, seller: req.user}))){
            throw new HttpException('offer not found', HttpStatus.NOT_FOUND);
        }
        let editParams = {};
        let mark: Mark;
        let model: Model;
        let generation: Generation;
        let status: Status;
        mark = editOfferDto.markId ? await this.markModel.findOne({id: editOfferDto.markId}).exec() : null;
        model = editOfferDto.modelId ? await this.modelModel.findOne({id: editOfferDto.modelId}).exec() : null;
        generation = editOfferDto.generationId ? await this.generationModel.findOne({id: editOfferDto.generationId}).exec() : null;
        status = editOfferDto.statusObjectId ? await this.statusModel.findById(editOfferDto.statusObjectId).exec() : null;
        if(mark){
            editParams['mark'] = mark;
        }
        if(model){
            editParams['mark'] = model;
        }
        if(generation){
            editParams['generation'] = generation;
        }
        if(status){
            editParams['status'] = status;
        }
        if(editOfferDto.description){
            editParams['description'] = editOfferDto.description;
        }
        if(!Object.keys(editParams).length){
            throw new HttpException('body can not be empty', HttpStatus.BAD_REQUEST);
        }
        await this.offerModel.updateOne({id: offerId, seller: req.user}, {...editParams}).exec();
        return await this.offerModel.findOne({id: offerId})
            .populate({
                path: 'images',
                select: 'name'
            })
            .populate({
                path: 'mark',
                select: 'name'
            })
            .populate({
                path: 'model',
                select: 'name'
            })
            .populate({
                path: 'generation',
                select: 'generation'
            })
            .populate({
                path: 'seller',
                select: 'firstName phoneNumber email'
            })
            .populate({
                path: 'status',
                select: 'name_en'
            })
            .exec();
    }

    async deleteOffer(@Req() req: UserRequestInterface, offerId: number): Promise<MessageResponseInterface>{
        const status = this.statusModel.findOne({name_en: 'deleted'}).exec();
        const offer = await this.offerModel.findOne({id: offerId, seller: req.user}).exec();
        if(!offer){
            throw new HttpException('offer not found', HttpStatus.NOT_FOUND);
        }
        await this.offerModel.updateOne({id: offerId, seller: req.user}, {status: status}).exec();
        return { message: 'offer was deleted' };
    }
    buildOfferResponse(offer: Offer): OfferResponseInterface {
        return {offer: offer};
    }

    buildOffersResponse(offers: Offer[]): OffersResponseInterface {
        return {offers: offers};
    }
}
