import { Component, OnInit } from '@angular/core';
import {Appointment} from '../../models/appointment.model';
import {AppointmentService} from '../../services/appointment.service';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent implements OnInit {
  appointment: Appointment;

  constructor(private appointmentService: AppointmentService) {

  }

  ngOnInit(): void {
    this.appointment = this.appointmentService.getSelectedAppointment();
  }

}
