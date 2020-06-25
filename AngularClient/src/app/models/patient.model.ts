import {Appointment} from './appointment.model';

export class Patient {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public phoneNumber: string,) {
  }

}
