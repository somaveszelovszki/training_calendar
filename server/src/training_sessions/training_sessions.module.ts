import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrainingSessionsService } from './training_sessions.service';
import { TrainingSessionsController } from './training_sessions.controller';
import { TrainingSession, TrainingSessionSchema } from 'src/schemas/training_session.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: TrainingSession.name, schema: TrainingSessionSchema }])
    ],
    providers: [TrainingSessionsService],
    controllers: [TrainingSessionsController]
})
export class TrainingSessionsModule { }
