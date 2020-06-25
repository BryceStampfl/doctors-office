import {Injectable} from '@angular/core';
import {Appointment} from '../models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  selectedAppointmentId: number;

  private appointments: Appointment[] = [
    new Appointment(103, 1, new Date('2020,02,01')),
    new Appointment(104, 2, new Date('2020,02,02')),
    new Appointment(105, 3, new Date('2020,02,03')),
    new Appointment(106, 4, new Date('2020,02,04')),
  ];

  constructor() {
  }

  getAppointments() {
    return this.appointments.slice();
  }


  getSelectedAppointment() {
    for (const ele of this.appointments) {
      if (this.selectedAppointmentId === ele.id) {
        return ele;
      }
    }
  }

  setSelectedAppointment(id: number) {
    this.selectedAppointmentId = id;
  }


}
