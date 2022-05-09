import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

export type StatusDocument = Status & Document;

@Schema({ collection: 'statuses', timestamps: true })
export class Status {
    @Prop()
    name_en: string;
}

export const StatusSchema = SchemaFactory.createForClass(Status);