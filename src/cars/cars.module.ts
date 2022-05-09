import {Module} from '@nestjs/common';
import {CarsService} from './cars.service';
import {CarsController} from './cars.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {Image, ImageSchema} from "../images/schemas/image.schema";
import {Offer, OfferSchema} from "./schemas/offer.schema";
import {Status, StatusSchema} from "./schemas/status.schema";
import {Mark, MarkSchema} from "../common/schemas/mark.schema";
import {Model, ModelSchema} from "../common/schemas/model.schema";
import {Generation, GenerationSchema} from "../common/schemas/generation.schema";
import {IsSpecifiedToMarkConstraint} from "../shared/validators/is-specified-to-mark.decorator";
import {IsSpecifiedMarkExistsConstraint} from "../shared/validators/is-specified-mark-exists.decorator";
import {IsSpecifiedToModelConstraint} from "../shared/validators/is-specified-to-model.decorator";
import {IsSpecifiedGenerationExistsConstraint} from "../shared/validators/is-specified-generation-exists.decorator";
import {IsSpecifiedModelExistsConstraint} from "../shared/validators/is-specified-model-exists.decorator";
import {IsMongoIdObjectConstraint} from "../shared/validators/is-mongo-id-object.decorator";
import {IsOfferExistsConstraint} from "../shared/validators/is-offer-exists.decorator";

@Module({
    imports: [
        MongooseModule.forFeature([{name: Offer.name, schema: OfferSchema}]),
        MongooseModule.forFeature([{name: Status.name, schema: StatusSchema}]),
        MongooseModule.forFeature([{name: Mark.name, schema: MarkSchema}]),
        MongooseModule.forFeature([{name: Model.name, schema: ModelSchema}]),
        MongooseModule.forFeature([{name: Generation.name, schema: GenerationSchema}]),
        MongooseModule.forFeature([{name: Image.name, schema: ImageSchema}]),
    ],
    controllers: [CarsController],
    providers: [
        CarsService,
        IsSpecifiedToMarkConstraint,
        IsSpecifiedToModelConstraint,
        IsSpecifiedMarkExistsConstraint,
        IsSpecifiedModelExistsConstraint,
        IsSpecifiedGenerationExistsConstraint,
        IsMongoIdObjectConstraint
    ],
    exports: [CarsService]
})
export class CarsModule {
}
