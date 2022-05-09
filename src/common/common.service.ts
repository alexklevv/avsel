import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model as MongooseModel} from "mongoose";
import {Mark, MarkDocument} from "./schemas/mark.schema";
import {MarksResponseInterface} from "./types/marks-response.interface";
import {Model, ModelDocument} from "./schemas/model.schema";
import {ModelsResponseInterface} from "./types/models-response.interface";
import {Generation, GenerationDocument} from "./schemas/generation.schema";
import {GenerationsResponseInterface} from "./types/generations-response.interface";

@Injectable()
export class CommonService {
  constructor(
      @InjectModel(Mark.name) private markModel: MongooseModel<MarkDocument>,
      @InjectModel(Model.name) private modelModel: MongooseModel<ModelDocument>,
      @InjectModel(Generation.name) private generationModel: MongooseModel<GenerationDocument>,
  ) {}

  async findMarks(): Promise<Mark[]> {
    return await this.markModel.find().exec();
  }

  async findModels(markId: string): Promise<Model[]> {
    return await this.modelModel.find({ markId: markId }).exec();
  }

  async findGenerations(markId, modelId): Promise<Generation[]> {
    const model = await this.modelModel.findOne({ id: modelId }).exec();
    if(markId !== model.markId){
      throw new HttpException('Requested generations are not exist on these car marks', HttpStatus.NOT_FOUND);
    }
    return await this.generationModel.find({ modelId: modelId}).exec();
  }

  buildMarksResponse(marks: Mark[]): MarksResponseInterface {
    return { marks: marks };
  }

  buildModelsResponse(models: Model[]): ModelsResponseInterface {
    return { models: models };
  }

  buildGenerationsResponse(generations: Generation[]): GenerationsResponseInterface {
    return { generations: generations };
  }
}
