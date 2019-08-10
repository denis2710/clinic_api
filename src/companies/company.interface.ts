import { IContact } from 'src/Interfaces/IContact';
import { IAddress } from 'src/Interfaces/IAddress';

export interface ICompany {
    id?: string;
    name: string;
    cnpj: string;
    contact: IContact;
    address: IAddress;
}
