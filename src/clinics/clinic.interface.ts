import { IContact } from 'src/Interfaces/IContact';
import { IAddress } from 'src/Interfaces/IAddress';

export interface IClinic {
  id?: string;
  companyId: string;
  contact: IContact;
  address: IAddress;
  consultories_id: [string];
}
