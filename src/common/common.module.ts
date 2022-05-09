import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { CommonController } from './common.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {Mark, MarkSchema} from "./schemas/mark.schema";
import {Model, ModelSchema} from "./schemas/model.schema";
import {Generation, GenerationSchema} from "./schemas/generation.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Mark.name, schema: MarkSchema }]),
    MongooseModule.forFeature([{ name: Model.name, schema: ModelSchema }]),
    MongooseModule.forFeature([{ name: Generation.name, schema: GenerationSchema }]),
  ],
  controllers: [CommonController],
  providers: [CommonService]
})
export class CommonModule {}
