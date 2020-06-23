import {Injectable} from '@angular/core';
import {Appointment} from '../models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private appointments: Appointment[] = [
    new Appointment('Bryce', 'Stampfl', '123', new Date('12')),
    new Appointment('Bryce1', 'Stampfl1', '2123', new Date('11')),
    new Appointment('Bryce2', 'Stampfl2', '3123', new Date('2')),
    new Appointment('Bryce3', 'Stampfl3', '4123', new Date('3')),
  ];

  constructor() {
  }

  getAppointments() {
    return this.appointments.slice();
  }


}
