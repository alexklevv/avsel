import {Body, Controller, Delete, Get, Post, Req, UseGuards} from '@nestjs/common';
import {AccountService} from './account.service';
import {AddInFavoriteDto} from "./dto/add-in-favorite.dto";
import {AccessTokenGuard} from "../auth/guards/access-token.guard";
import {UserRequestInterface} from "../users/types/user-request.interface";
import {FavouriteResponseInterface} from "./types/favourite-response.interface";
import {DeleteFromFavoritesDto} from "./dto/delete-from-favorites.dto";
import {MessageResponseInterface} from "../common/types/message-response.interface";
import {CarsService} from "../cars/cars.service";
import {OffersResponseInterface} from "../cars/types/offers-response.interface";
import {InjectUserToBody} from "../shared/decorators/inject-user.decorator";

@Controller('account')
export class AccountController {
    constructor(
        private readonly accountService: AccountService,
        private readonly carsService: CarsService
    ) {
    }

    @UseGuards(AccessTokenGuard)
    @Get('offers/active')
    async findActive(@Req() req: UserRequestInterface): Promise<OffersResponseInterface> {
        const offers = await this.accountService.findActive(req);
        return this.carsService.buildOffersResponse(offers);
    }

    @UseGuards(AccessTokenGuard)
    @Get('offers/moderation')
    async findInModeration(@Req() req: UserRequestInterface): Promise<OffersResponseInterface> {
        const offers = await this.accountService.findInModeration(req);
        return this.carsService.buildOffersResponse(offers);
    }

    @UseGuards(AccessTokenGuard)
    @Get('offers/rejected')
    async findRejected(@Req() req: UserRequestInterface): Promise<OffersResponseInterface> {
        const offers = await this.accountService.findRejected(req);
        return this.carsService.buildOffersResponse(offers);
    }

    @UseGuards(AccessTokenGuard)
    @Get('favourites')
    async findFavorites(@Req() req: UserRequestInterface) {
        return await this.accountService.findFavorites(req);
    }

    @UseGuards(AccessTokenGuard)
    @Post('favourites')
    @InjectUserToBody('favourite')
    async addInFavorites(
        @Req() req: UserRequestInterface,
        @Body('favourite') addInFavoriteDto: AddInFavoriteDto
    ): Promise<FavouriteResponseInterface> {
        const favourite = await this.accountService.addInFavorites(req, addInFavoriteDto);
        return this.accountService.buildFavouriteResponse(favourite);
    }

    @UseGuards(AccessTokenGuard)
    @Delete('favourites')
    @InjectUserToBody('favourite')
    async removeFromFavorites(
        @Req() req: UserRequestInterface,
        @Body('favourite') deleteFromFavoritesDto: DeleteFromFavoritesDto
    ): Promise<MessageResponseInterface> {
        return await this.accountService.removeFromFavorites(req, deleteFromFavoritesDto);
    }
}
