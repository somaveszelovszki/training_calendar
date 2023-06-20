import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TrainingDocument = Training & Document;

@Schema({ collection: 'trainings' })
export class Training {
    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    duration_minutes: number;

    @Prop()
    max_num_participants: number;
}

export const TrainingSchema = SchemaFactory.createForClass(Training);