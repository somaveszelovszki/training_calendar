import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { TrainingsService } from './trainings.service';

@Controller('trainings')
export class TrainingsController {
    constructor(private trainingsService: TrainingsService) { }

    @Get('/')
    async getTrainings() {
        return await this.trainingsService.getAllTrainings();
    }

    @Get('/:id')
    async getTraining(@Param('id') id: string) {
        const training = await this.trainingsService.getTraining(id);
        if (!training) throw new NotFoundException('Training does not exist!');
        return training;
    }
}
