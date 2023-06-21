import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Venue } from './venue.schema';

export type ProviderAccountDocument = ProviderAccount & Document;

@Schema({ collection: 'provider_accounts' })
export class ProviderAccount {
    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop([{ type: MongooseSchema.Types.ObjectId, ref: 'venues' }])
    venues: Venue[];
}

export const ProviderAccountSchema = SchemaFactory.createForClass(ProviderAccount);