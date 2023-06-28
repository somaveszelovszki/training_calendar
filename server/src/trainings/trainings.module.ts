import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrainingsService } from './trainings.service';
import { TrainingsController } from './trainings.controller';
import { ProviderAccount, ProviderAccountSchema } from 'src/schemas/provider_account.schema';
import { Training, TrainingSchema } from 'src/schemas/training.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ProviderAccount.name, schema: ProviderAccountSchema }]),
    MongooseModule.forFeature([{ name: Training.name, schema: TrainingSchema }])
  ],
  providers: [TrainingsService],
  controllers: [TrainingsController]
})
export class TrainingsModule { }
