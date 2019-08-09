import { Module } from '@nestjs/common';
import { ConsultoriesService } from './consultories.service';
import { ConsultoriesController } from './consultories.controller';

@Module({
  providers: [ConsultoriesService],
  controllers: [ConsultoriesController]
})
export class ConsultoriesModule {}
