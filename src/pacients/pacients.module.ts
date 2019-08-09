import { Module } from '@nestjs/common';
import { PacientsService } from './pacients.service';
import { PacientsController } from './pacients.controller';

@Module({
  providers: [PacientsService],
  controllers: [PacientsController]
})
export class PacientsModule {}
