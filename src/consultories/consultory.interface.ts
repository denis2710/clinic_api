export interface IConsultory {

    id: string;
    schedule_id: string;
    clinic_id: string;
    speciality_id: string;
    indentification_name: string;
    number: string;
    observation?: string;
    disponible: boolean;
}
