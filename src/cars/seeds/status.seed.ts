import {Command} from 'nestjs-command';
import {Injectable} from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from "@nestjs/mongoose";
import {Status, StatusDocument} from "../schemas/status.schema";

@Injectable()
export class StatusSeed {
    constructor(
        @InjectModel(Status.name) private statusModel: Model<StatusDocument>,
    ) {
    }

    @Command({command: 'create:offer_statuses', describe: 'create offer statuses'})
    async create() {
        const notActiveStatus = new this.statusModel({name_en: 'not active'});
        const activeStatus = new this.statusModel({name_en: 'active'});
        const onModerationStatus = new this.statusModel({name_en: 'on moderation'});
        const rejectedStatus = new this.statusModel({name_en: 'rejected'});
        const deletedStatus = new this.statusModel({name_en: 'deleted'});

        await notActiveStatus.save();
        await activeStatus.save();
        await onModerationStatus.save();
        await rejectedStatus.save();
        await deletedStatus.save();
    }
}