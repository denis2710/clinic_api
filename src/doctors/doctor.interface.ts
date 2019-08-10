import { IContact } from 'src/Interfaces/IContact';

export interface IDoctor {
    id: string;
    name: string;
    crm: number;
    specialityes_id: [string];
    contact: IContact;
}
