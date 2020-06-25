import {Injectable} from '@angular/core';
import {Appointment} from '../models/appointment.model';
import {DataLoaderService} from './data-loader.service';
import {PatientService} from './patient.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  selectedAppointmentId: number;

  private appointments: Appointment[];

  constructor(private dataLoader: DataLoaderService, private patientService: PatientService) {
    this.appointments = this.dataLoader.loadAppointments();
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


  sortAppointmentsByFirstName(revSort: boolean) {
    if (!revSort) {
      this.appointments.sort((a, b) =>
        (this.patientService.getPatientById(a.patientID).firstName > this.patientService.getPatientById(b.patientID).firstName ? 1 : -1));
    }else {
      this.appointments.sort((a, b) =>
        (this.patientService.getPatientById(a.patientID).firstName < this.patientService.getPatientById(b.patientID).firstName ? 1 : -1));
    }
  }

  sortAppointmentsByLastName(revSort: boolean){
    if (!revSort) {
      this.appointments.sort((a, b) =>
        (this.patientService.getPatientById(a.patientID).lastName > this.patientService.getPatientById(b.patientID).lastName ? 1 : -1));
    }
    else {
      this.appointments.sort((a, b) =>
        (this.patientService.getPatientById(a.patientID).lastName < this.patientService.getPatientById(b.patientID).lastName ? 1 : -1));
    }
  }
  sortAppointmentByDate(revSort: boolean){
    if (!revSort) {
      this.appointments.sort((a, b) => (a.date > b.date ? 1 : -1));
    } else {
      this.appointments.sort((a, b) => (a.date < b.date ? 1 : -1));
    }
  }

}
