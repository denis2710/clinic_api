import { Test, TestingModule } from '@nestjs/testing';
import { ConsultoriesService } from './consultories.service';

describe('ConsultoriesService', () => {
  let service: ConsultoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsultoriesService],
    }).compile();

    service = module.get<ConsultoriesService>(ConsultoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
