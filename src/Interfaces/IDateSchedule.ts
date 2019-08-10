import { IAppointment } from 'src/appointments/appointment.interface';

export interface IDateSchedule {
    date: Date;
    appointments: [IAppointment]
}