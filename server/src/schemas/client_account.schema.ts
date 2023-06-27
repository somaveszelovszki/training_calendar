import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { TrainingSession } from './training_session.schema';

export type ClientAccountDocument = ClientAccount & Document;

@Schema({ collection: 'client_accounts' })
export class ClientAccount {
    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop([{ type: MongooseSchema.Types.ObjectId, ref: 'training_sessions' }])
    sessions: TrainingSession[];
}

export const ClientAccountSchema = SchemaFactory.createForClass(ClientAccount);