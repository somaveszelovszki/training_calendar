import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Gym, GymDocument } from '../schemas/gym.schema';

@Injectable()
export class GymsService {
    constructor(@InjectModel(Gym.name) private readonly trainingModel: Model<GymDocument>) { }

    async getAllGyms(): Promise<Gym[]> {
        return await this.trainingModel.find().exec();
    }

    async getGym(uri: string): Promise<Gym> {
        return await this.trainingModel.findOne({ uri: uri }).exec();
    }
}
