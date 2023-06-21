import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { TrainingSessionsService } from './training_sessions.service';

@Controller('training_sessions')
export class TrainingSessionsController {
    constructor(private trainingsService: TrainingSessionsService) { }

    @Get('/')
    async getTrainingSessions() {
        return await this.trainingsService.getAllTrainingSessions();
    }

    @Get('/:id')
    async getTrainingSession(@Param('id') id: string) {
        const training = await this.trainingsService.getTrainingSession(id);
        if (!training) throw new NotFoundException('Training does not exist!');
        return training;
    }
}
