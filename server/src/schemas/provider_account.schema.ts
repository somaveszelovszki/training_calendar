import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Gym } from './gym.schema';

export type ProviderAccountDocument = ProviderAccount & Document;

@Schema({ collection: 'provider_accounts' })
export class ProviderAccount {
    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop([{ type: MongooseSchema.Types.ObjectId, ref: 'gyms' }])
    gyms: Gym[];
}

export const ProviderAccountSchema = SchemaFactory.createForClass(ProviderAccount);