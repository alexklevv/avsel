import {MiddlewareConsumer, Module, RequestMethod} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { SeedsModule } from "./shared/seeds/seeds.module";
import {AuthMiddleware} from "./auth/middlewares/auth.middelware";

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb+srv://owner:UynlPUP5AArClRYm@carsmarket.vyc0s.mongodb.net/CarsMarket?retryWrites=true&w=majority'),
    MongooseModule.forRoot('mongodb://localhost:27017/cars'),
    SeedsModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
