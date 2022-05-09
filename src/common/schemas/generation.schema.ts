import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GenerationDocument = Generation & Document;

@Schema({ timestamps: true })
export class Generation {
    @Prop()
    id: string;

    @Prop()
    modelId: string;

    @Prop()
    generation: string;

    @Prop()
    firstYear: string;

    @Prop()
    secondYear: string;

    @Prop()
    isRest: string;

    @Prop()
    image: string;
}

export const GenerationSchema = SchemaFactory.createForClass(Generation);