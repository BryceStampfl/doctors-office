export class Appointment {
  constructor(
    public id: number,
    public patientID: number,
    public date: Date,
    public description: string) {
  }

}
