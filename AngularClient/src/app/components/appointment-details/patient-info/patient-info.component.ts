import {Component, OnInit} from '@angular/core';
import {Appointment} from '../../../models/appointment.model';
import {Patient} from '../../../models/patient.model';
import {AppointmentService} from '../../../services/appointment.service';
import {PatientService} from '../../../services/patient.service';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {
  appointment: Appointment;
  patient: Patient;
  editing = false;

  constructor(private appointmentService: AppointmentService,
              private patientService: PatientService) {
    this.appointment = this.appointmentService.getSelectedAppointment();
    this.patient = this.patientService.getPatientById(this.appointment.patientID);

  }

  ngOnInit(): void {

  }

  onEditPressed() {
    this.editing = !this.editing;
  }

}
