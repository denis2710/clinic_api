import { IDateSchedule } from 'src/Interfaces/IDateSchedule';

export interface ISchedule {
    id: string;
    consultory_id: string;

    dates: [IDateSchedule]
}