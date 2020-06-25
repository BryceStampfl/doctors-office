import {Component, ComponentFactoryResolver, ComponentRef, OnInit} from '@angular/core';
import {Appointment} from '../../models/appointment.model';
import {AppointmentService} from '../../services/appointment.service';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {PatientService} from '../../services/patient.service';

@Component({
  selector: 'app-appointment-table',
  templateUrl: './appointment-table.component.html',
  styleUrls: ['./appointment-table.component.css']
})
export class AppointmentTableComponent implements OnInit {
  headers = ['FIRST', 'LAST', 'PHONE', 'DATE'];
  appointments: Appointment[];
  hover = 'noHover';

  constructor(private appointmentService: AppointmentService,
              private patientService: PatientService) {
  }

  ngOnInit(): void {
    this.appointments = this.appointmentService.getAppointments();
  }

  selectedAppointment(id: number) {
    this.appointmentService.setSelectedAppointment(id);
  }

  getPatientByAppointment(appointment: Appointment) {
    return this.patientService.getPatientById(appointment.patientID);
  }
}
