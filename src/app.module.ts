import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompaniesModule } from './companies/companies.module';
import { ConsultoriesModule } from './consultories/consultories.module';
import { ClinicsModule } from './clinics/clinics.module';
import { SchedulesModule } from './schedules/schedules.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { DoctorsModule } from './doctors/doctors.module';
import { PacientsModule } from './pacients/pacients.module';

@Module({
  imports: [CompaniesModule, ConsultoriesModule, ClinicsModule, SchedulesModule, AppointmentsModule, DoctorsModule, PacientsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
