import {Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards} from '@nestjs/common';
import {CarsService} from './cars.service';
import {CreateOfferDto} from './dto/create-offer.dto';
import {UserRequestInterface} from "../users/types/user-request.interface";
import {AccessTokenGuard} from "../auth/guards/access-token.guard";
import {OfferResponseInterface} from "./types/offer-response.interface";
import {OffersResponseInterface} from "./types/offers-response.interface";
import {EditOfferDto} from "./dto/edit-offer.dto";
import {MessageResponseInterface} from "../common/types/message-response.interface";
import {exec} from "child_process";

@Controller('cars')
export class CarsController {
    constructor(private readonly carsService: CarsService) {
    }

    @UseGuards(AccessTokenGuard)
    @Post()
    async createOffer(
        @Req() req: UserRequestInterface,
        @Body('offer') createOfferDto: CreateOfferDto
    ): Promise<OfferResponseInterface> {
        const newOffer = await this.carsService.createOffer(req, createOfferDto);
        return this.carsService.buildOfferResponse(newOffer);
    }

    @Get()
    async findOffers(): Promise<OffersResponseInterface> {
        const offers = await this.carsService.findOffers();
        return this.carsService.buildOffersResponse(offers);
    }

    @Get(':offerId')
    async findOffer(@Param('offerId') offerId: string): Promise<OfferResponseInterface> {
        const offer = await this.carsService.findOffer(+offerId);
        return this.carsService.buildOfferResponse(offer);
    }

    @UseGuards(AccessTokenGuard)
    @Patch(':offerId')
    async editOffer(@Req() req: UserRequestInterface, @Param('offerId') offerId: string, @Body('offer') editOfferDto: EditOfferDto): Promise<OfferResponseInterface> {
        const offer = await this.carsService.editOffer(req, +offerId, editOfferDto);
        return this.carsService.buildOfferResponse(offer);
    }

    @UseGuards(AccessTokenGuard)
    @Delete(':offerId')
    async deleteOffer(@Req() req: UserRequestInterface, @Param('offerId') offerId: string): Promise<MessageResponseInterface> {
        return await this.carsService.deleteOffer(req, +offerId);
    }
}
