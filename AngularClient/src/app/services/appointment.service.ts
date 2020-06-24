import {Injectable} from '@angular/core';
import {Appointment} from '../models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  selectedAppointmentId: number;

  private appointments: Appointment[] = [
    new Appointment(1, 'Bryce', 'Stampfl', '916-803-8473', new Date('2020,02,16')),
    new Appointment(2, 'Thor', 'Ragnarok', '123-456-7890', new Date('2020,02,16')),
    new Appointment(3, 'John', 'Cena', '666-666-6666', new Date('2020,02,16')),
    new Appointment(4, 'Jennifer', 'Lawrence', '987-654-3211', new Date('2020,02,16')),
  ];

  constructor() {
  }

  getAppointments() {
    return this.appointments.slice();
  }

  getSelectedAppointment() {
    for (let ele of this.appointments) {
      if (this.selectedAppointmentId === ele.id) {
        return ele;
      }
    }
  }

  setSelectedAppointment(id: number) {
    this.selectedAppointmentId = id;

  }


}
