import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ProviderAccount } from 'src/schemas/provider_account.schema';
import { Training, TrainingDocument } from 'src/schemas/training.schema';

@Injectable()
export class TrainingsService {
    constructor(@InjectModel(Training.name) private readonly trainingModel: Model<TrainingDocument>) { }

    async getAllTrainings(): Promise<Training[]> {
        return await this.trainingModel.find().exec();
    }

    async getTraining(id: string): Promise<Training> {
        return await this.trainingModel.findById(id).populate<{ trainer: ProviderAccount }>('trainer').exec();
    }
}
