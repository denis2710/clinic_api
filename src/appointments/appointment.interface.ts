export interface IAppointment {
    appointment_id: string;
    doctor_id: string;
    pacient_id: string;
    created_at: Date;
    hour_start: Date;
    hour_end: Date;
    speciality: string;
}
