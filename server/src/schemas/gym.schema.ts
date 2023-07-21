import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Training } from './training.schema';

export type GymDocument = Gym & Document;

@Schema()
export class Location {
    @Prop()
    name: string;

    @Prop()
    description: string;
}

@Schema({ collection: 'gyms' })
export class Gym {
    @Prop()
    name: string;

    @Prop()
    address: string;

    @Prop()
    locations: Location[];

    @Prop([{ type: MongooseSchema.Types.ObjectId, ref: 'Training' }])
    trainings: Training[];
}

export const GymSchema = SchemaFactory.createForClass(Gym);