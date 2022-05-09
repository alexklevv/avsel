import {Module} from '@nestjs/common';
import {ComplaintsService} from './complaints.service';
import {ComplaintsController} from './complaints.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {Offer, OfferSchema} from "../cars/schemas/offer.schema";
import {User, UserSchema} from "../users/schemas/user.schema";
import {Complaint, ComplaintSchema} from "./schemas/complaint.schema";
import {IsMongoIdObjectConstraint} from "../shared/validators/is-mongo-id-object.decorator";
import {IsOfferExistsConstraint} from "../shared/validators/is-offer-exists.decorator";

@Module({
    imports: [
        MongooseModule.forFeature([{name: Offer.name, schema: OfferSchema}]),
        MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
        MongooseModule.forFeature([{name: Complaint.name, schema: ComplaintSchema}]),
    ],
    controllers: [ComplaintsController],
    providers: [
        ComplaintsService,
        IsOfferExistsConstraint,
        IsMongoIdObjectConstraint,
        IsOfferExistsConstraint
    ]
})
export class ComplaintsModule {
}
