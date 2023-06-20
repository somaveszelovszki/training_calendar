import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrainingsService } from './trainings.service';
import { TrainingsController } from './trainings.controller';
import { Training, TrainingSchema } from '../schemas/training.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Training.name, schema: TrainingSchema }])
  ],
  providers: [TrainingsService],
  controllers: [TrainingsController]
})
export class TrainingsModule { }
