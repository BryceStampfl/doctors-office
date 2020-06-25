import { Component, OnInit } from '@angular/core';
import {Appointment} from '../../../models/appointment.model';
import {Patient} from '../../../models/patient.model';
import {AppointmentService} from '../../../services/appointment.service';
import {PatientService} from '../../../services/patient.service';

@Component({
  selector: 'app-appointment-info',
  templateUrl: './appointment-info.component.html',
  styleUrls: ['./appointment-info.component.css']
})
export class AppointmentInfoComponent implements OnInit {
  appointment: Appointment;
  patient: Patient;

  constructor(private appointmentService: AppointmentService,
              private patientService: PatientService) {

  }

  ngOnInit(): void {
    this.appointment = this.appointmentService.getSelectedAppointment();
    this.patient = this.patientService.getPatientById(this.appointment.patientID);
  }

}
