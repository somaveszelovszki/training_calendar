import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { ProviderAccount } from './provider_account.schema';
import { Location } from './gym.schema';

export type TrainingDocument = Training & Document;

@Schema()
export class Price {
    @Prop()
    num_trainings: number;

    @Prop()
    price: number;

    @Prop()
    currency: string;
}

@Schema({ collection: 'trainings' })
export class Training {
    @Prop()
    title: string;

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'ProviderAccount' })
    trainer: ProviderAccount;

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Gym' })
    location: Location;

    @Prop()
    description: string;

    @Prop()
    duration_minutes: number;

    @Prop()
    max_num_participants: number;

    @Prop()
    prices: Price[];
}

export const TrainingSchema = SchemaFactory.createForClass(Training);