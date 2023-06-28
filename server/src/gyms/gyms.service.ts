import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Gym, GymDocument } from 'src/schemas/gym.schema';

@Injectable()
export class GymsService {
    constructor(@InjectModel(Gym.name) private readonly gymModel: Model<GymDocument>) { }

    async getAllGyms(): Promise<Gym[]> {
        return await this.gymModel.find().exec();
    }

    async getGym(uri: string): Promise<Gym> {
        return await this.gymModel.findOne({ uri: uri })
            .populate({
                path: 'trainings',
                populate: {
                    path: 'trainer'
                }
            })
            .exec();
    }
}
