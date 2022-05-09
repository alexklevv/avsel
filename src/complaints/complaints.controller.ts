import {Body, Controller, Get, Post, Req} from '@nestjs/common';
import {ComplaintsService} from './complaints.service';
import {CreateComplaintDto} from './dto/create-complaint.dto';
import {UserRequestInterface} from "../users/types/user-request.interface";
import {ComplaintResponseInterface} from "./types/complaint-response.interface";

@Controller('complaints')
export class ComplaintsController {
    constructor(private readonly complaintsService: ComplaintsService) {
    }


    @Post()
    async create(
        @Req() req: UserRequestInterface,
        @Body() createComplaintDto: CreateComplaintDto
    ): Promise<ComplaintResponseInterface> {
        const complaint = await this.complaintsService.create(req, createComplaintDto);
        return this.complaintsService.buildComplaintResponse(complaint);
    }


    @Get()
    async findAll() {
        const complaints = await this.complaintsService.findAll();
        return this.complaintsService.buildComplaintsResponse(complaints);
    }

}
