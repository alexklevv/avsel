import {HttpException, HttpStatus, Injectable, Req} from '@nestjs/common';
import {AddInFavoriteDto} from "./dto/add-in-favorite.dto";
import {InjectModel} from "@nestjs/mongoose";
import {Model as MongooseModel} from "mongoose";
import {Offer, OfferDocument} from "../cars/schemas/offer.schema";
import {Favourite, FavouriteDocument} from "./schemas/favourite.schema";
import {UserRequestInterface} from "../users/types/user-request.interface";
import {FavouriteResponseInterface} from "./types/favourite-response.interface";
import {DeleteFromFavoritesDto} from "./dto/delete-from-favorites.dto";
import {MessageResponseInterface} from "../common/types/message-response.interface";
import {Status, StatusDocument} from "../cars/schemas/status.schema";

@Injectable()
export class AccountService {
    constructor(
        @InjectModel(Offer.name) private offerModel: MongooseModel<OfferDocument>,
        @InjectModel(Favourite.name) private favouriteModel: MongooseModel<FavouriteDocument>,
        @InjectModel(Status.name) private statusModel: MongooseModel<StatusDocument>,
    ) {
    }

    async addInFavorites(@Req() req: UserRequestInterface, addInFavoriteDto: AddInFavoriteDto): Promise<Favourite> {
        const offer = await this.offerModel.findOne({_id: addInFavoriteDto.offerObjectId}).exec();
        if (!offer) {
            throw new HttpException('offer not found', HttpStatus.NOT_FOUND);
        }
        return await new this.favouriteModel({
            offer: offer,
            user: req.user
        }).save();
    }

    async findActive(@Req() req: UserRequestInterface): Promise<Offer[]> {
        const statusActive = await this.statusModel.findOne({name_en: 'active'}).exec();
        return await this.offerModel.find({status: statusActive, seller: req.user})
            .populate({
                path: 'images',
                match: {isMain: true},
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

    async findInModeration(@Req() req: UserRequestInterface): Promise<Offer[]> {
        const statusActive = await this.statusModel.findOne({name_en: 'on moderation'}).exec();
        return await this.offerModel.find({status: statusActive, seller: req.user})
            .populate({
                path: 'images',
                match: {isMain: true},
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

    async findRejected(@Req() req: UserRequestInterface): Promise<Offer[]> {
        const statusActive = await this.statusModel.findOne({name_en: 'rejected'}).exec();
        return await this.offerModel.find({status: statusActive, seller: req.user})
            .populate({
                path: 'images',
                match: {isMain: true},
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

    async findFavorites(@Req() req: UserRequestInterface): Promise<Favourite[]> {
        return await this.favouriteModel.find({user: req.user})
            .populate({
                path: 'offer'
            }).exec();
    }

    async removeFromFavorites(@Req() req: UserRequestInterface, deleteFromFavoritesDto: DeleteFromFavoritesDto): Promise<MessageResponseInterface> {
        const offer = await this.offerModel.findOne({_id: deleteFromFavoritesDto.offerObjectId}).exec();
        if (!offer) {
            throw new HttpException('offer not found', HttpStatus.NOT_FOUND);
        }
        const deletedFavorite = await this.favouriteModel.deleteOne({
            offer: offer,
            user: req.user
        }).exec();
        if (!deletedFavorite.deletedCount) {
            throw new HttpException('error deleting from favorites occurred', HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return {message: 'offer was deleted from favorites'};
    }

    buildFavouriteResponse(favourite: Favourite): FavouriteResponseInterface {
        return {favourite: favourite}
    }
}
