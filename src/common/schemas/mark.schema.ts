import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MarkDocument = Mark & Document;

@Schema({ timestamps: true })
export class Mark {
    @Prop()
    id: string;

    @Prop()
    systemId: string;

    @Prop()
    name: string;
}

export const MarkSchema = SchemaFactory.createForClass(Mark);