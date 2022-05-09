import {Injectable, Req} from '@nestjs/common';
import {CreateComplaintDto} from './dto/create-complaint.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Offer, OfferDocument} from "../cars/schemas/offer.schema";
import {Model as MongooseModel} from "mongoose";
import {Complaint, ComplaintDocument} from "./schemas/complaint.schema";
import {UserRequestInterface} from "../users/types/user-request.interface";
import {ComplaintResponseInterface} from "./types/complaint-response.interface";
import {ComplaintsResponseInterface} from "./types/complaints-response.interface";

@Injectable()
export class ComplaintsService {
    constructor(
        @InjectModel(Offer.name) private offerModel: MongooseModel<OfferDocument>,
        @InjectModel(Complaint.name) private complaintModel: MongooseModel<ComplaintDocument>,
    ) {
    }

    async create(@Req() req: UserRequestInterface, createComplaintDto: CreateComplaintDto): Promise<Complaint> {
        const offer = await this.offerModel.findById(createComplaintDto.offerObjectId).exec();
        return await new this.complaintModel({
            offer: offer,
            reporter: req.user,
            content: createComplaintDto.content
        }).save();
    }

    async findAll(): Promise<Complaint[]> {
        return await this.complaintModel.find().exec();
    }

    buildComplaintResponse(complaint: Complaint): ComplaintResponseInterface {
        return {complaint: complaint};
    }

    buildComplaintsResponse(complaints: Complaint[]): ComplaintsResponseInterface {
        return {complaints: complaints};
    }
}
