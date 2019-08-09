import { Test, TestingModule } from '@nestjs/testing';
import { ConsultoriesController } from './consultories.controller';

describe('Consultories Controller', () => {
  let controller: ConsultoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConsultoriesController],
    }).compile();

    controller = module.get<ConsultoriesController>(ConsultoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
