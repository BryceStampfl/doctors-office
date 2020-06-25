import {Patient} from './patient.model';

export class Appointment {
  constructor(
    public id: number,
    public patientID: number,
    public date: Date) {
  }

}
