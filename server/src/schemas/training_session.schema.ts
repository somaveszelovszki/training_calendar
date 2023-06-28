import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { ClientAccount } from './client_account.schema';
import { Training } from './training.schema';

export type TrainingSessionDocument = TrainingSession & Document;

@Schema({ collection: 'training_sessions' })
export class TrainingSession {
    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Training' })
    training: Training;

    @Prop()
    date: Date;

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'ClientAccount' })
    participants: ClientAccount[];

    @Prop()
    notes: string;
}

export const TrainingSessionSchema = SchemaFactory.createForClass(TrainingSession);