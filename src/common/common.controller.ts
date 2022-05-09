import {Controller, Get, Param} from '@nestjs/common';
import { CommonService } from './common.service';
import {MarksResponseInterface} from "./types/marks-response.interface";
import {ModelsResponseInterface} from "./types/models-response.interface";
import {GenerationsResponseInterface} from "./types/generations-response.interface";

@Controller('common')
export class CommonController {
  constructor(private readonly commonService: CommonService) {}

  @Get('marks')
  async findMarks(): Promise<MarksResponseInterface> {
    const marks = await this.commonService.findMarks();
    return this.commonService.buildMarksResponse(marks);
  }

  @Get('marks/:markId/models')
  async findModels(
      @Param('markId') markId: string
  ): Promise<ModelsResponseInterface> {
    const models = await this.commonService.findModels(markId);
    return this.commonService.buildModelsResponse(models);
  }

  @Get('marks/:markId/models/:modelId/generations')
  async findGenerations(
      @Param('markId') markId: string,
      @Param('modelId') modelId: string
  ): Promise<GenerationsResponseInterface> {
    const generations = await this.commonService.findGenerations(markId, modelId);
    return this.commonService.buildGenerationsResponse(generations);
  }

}
