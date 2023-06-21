import { Test, TestingModule } from '@nestjs/testing';
import { TrainingSessionsController } from './training_sessions.controller';

describe('TrainingSessionsController', () => {
  let controller: TrainingSessionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrainingSessionsController],
    }).compile();

    controller = module.get<TrainingSessionsController>(TrainingSessionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
