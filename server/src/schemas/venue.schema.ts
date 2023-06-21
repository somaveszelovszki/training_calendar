import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VenueDocument = Venue & Document;

@Schema()
export class Location {
    @Prop()
    name: string;

    @Prop()
    description: string;
}

@Schema({ collection: 'venues' })
export class Venue {
    @Prop()
    name: string;

    @Prop()
    address: string;

    @Prop()
    locations: Location[];
}

export const VenueSchema = SchemaFactory.createForClass(Venue);