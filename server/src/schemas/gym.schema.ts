import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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
}

export const GymSchema = SchemaFactory.createForClass(Gym);