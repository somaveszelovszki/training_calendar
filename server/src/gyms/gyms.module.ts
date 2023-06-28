import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GymsService } from './gyms.service';
import { GymsController } from './gyms.controller';
import { Gym, GymSchema } from 'src/schemas/gym.schema';
import { ProviderAccount, ProviderAccountSchema } from 'src/schemas/provider_account.schema';
import { Training, TrainingSchema } from 'src/schemas/training.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Gym.name, schema: GymSchema }]),
    MongooseModule.forFeature([{ name: ProviderAccount.name, schema: ProviderAccountSchema }]),
    MongooseModule.forFeature([{ name: Training.name, schema: TrainingSchema }])
  ],
  providers: [GymsService],
  controllers: [GymsController]
})
export class GymsModule { }
