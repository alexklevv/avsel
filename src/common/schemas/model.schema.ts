import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ModelDocument = Model & Document;

@Schema({ timestamps: true })
export class Model {
    @Prop()
    id: string;

    @Prop()
    markId: string;

    @Prop()
    systemId: string;

    @Prop()
    name: string;
}

export const ModelSchema = SchemaFactory.createForClass(Model);