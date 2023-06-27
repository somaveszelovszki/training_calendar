import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GymsService } from './gyms.service';
import { GymsController } from './gyms.controller';
import { Gym, GymSchema } from '../schemas/gym.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Gym.name, schema: GymSchema }])
  ],
  providers: [GymsService],
  controllers: [GymsController]
})
export class GymsModule { }
