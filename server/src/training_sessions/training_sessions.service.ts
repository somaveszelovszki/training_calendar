import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { TrainingSession, TrainingSessionDocument } from '../schemas/training_session.schema';

@Injectable()
export class TrainingSessionsService {
    constructor(@InjectModel(TrainingSession.name) private readonly trainingSessionModel: Model<TrainingSessionDocument>) { }

    async getAllTrainingSessions(): Promise<TrainingSession[]> {
        return await this.trainingSessionModel.find().exec();
    }

    async getTrainingSession(id: string): Promise<TrainingSession> {
        return await this.trainingSessionModel.findById(id).exec();
    }
}
