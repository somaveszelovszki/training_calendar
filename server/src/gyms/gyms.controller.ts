import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { GymsService } from './gyms.service';

@Controller('gyms')
export class GymsController {
    constructor(private gymsService: GymsService) { }

    @Get('/')
    async getGyms() {
        return await this.gymsService.getAllGyms();
    }

    @Get('/:uri')
    async getGym(@Param('uri') uri: string) {
        console.log(`Getting gym: ${uri}`);
        const gym = await this.gymsService.getGym(uri);
        if (!gym) throw new NotFoundException('Gym does not exist!');
        return gym;
    }
}
