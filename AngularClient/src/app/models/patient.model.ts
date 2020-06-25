import {ContactInfo} from './contact-info.model';

export class Patient {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public contactInfo: ContactInfo) {
  }
}


