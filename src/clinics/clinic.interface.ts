import { IContact } from "src/Interfaces/IContact";

export interface IClinic { 
  id?: string; 
  companyId: string; 
  contact: IContact;
}