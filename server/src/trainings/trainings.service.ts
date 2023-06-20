import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Training, TrainingDocument } from '../schemas/training.schema';

@Injectable()
export class TrainingsService {
    constructor(@InjectModel(Training.name) private readonly trainingModel: Model<TrainingDocument>) { }

    async getAllTrainings(): Promise<Training[]> {
        return await this.trainingModel.find().exec();
    }

    async getTraining(id: string): Promise<Training> {
        return await this.trainingModel.findById(id).exec();
    }
}
