import {MiddlewareConsumer, Module, RequestMethod} from '@nestjs/common';
import { getConnectionToken, MongooseModule } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { SeedsModule } from "./shared/seeds/seeds.module";
import {AuthMiddleware} from "./auth/middlewares/auth.middelware";
import { CommonModule } from './common/common.module';
import { AccountModule } from './account/account.module';
import { CarsModule } from './cars/cars.module';
import { ImagesModule } from './images/images.module';
import {MulterModule} from "@nestjs/platform-express";
import {Offer, OfferSchema} from "./cars/schemas/offer.schema";
import { ComplaintsModule } from './complaints/complaints.module';
const AutoIncrementFactory = require('mongoose-sequence');

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb+srv://owner:UynlPUP5AArClRYm@carsmarket.vyc0s.mongodb.net/CarsMarket?retryWrites=true&w=majority'),
    MongooseModule.forRoot('mongodb://localhost:27017/cars'),
    MongooseModule.forFeatureAsync([
      {
        name: Offer.name,
        useFactory: async (connection: Connection) => {
          const schema = OfferSchema;
          const AutoIncrement = AutoIncrementFactory(connection);
          schema.plugin(AutoIncrement, {inc_field: 'id'});
          return schema;
        },
        inject: [getConnectionToken()]
      },
    ]),
    SeedsModule,
    UsersModule,
    AuthModule,
    CommonModule,
    AccountModule,
    CarsModule,
    ImagesModule,
    MulterModule.register(),
    ComplaintsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
