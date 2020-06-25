import {Component, ComponentFactoryResolver, ComponentRef, ElementRef, OnInit} from '@angular/core';
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

  prevSort = '';
  revSort: boolean;

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

  headerClicked(ele: MouseEvent) {
    // Gets the header which was clicked
    const clickedHeader: string = ((ele.target as Element).id);

    if (clickedHeader !== this.prevSort) {
      this.revSort = false;
    } else if (this.revSort === true) {
      this.revSort = false;
    } else {
      this.revSort = true;
    }

    switch (clickedHeader) {
      case 'FIRST' : { this.appointmentService.sortAppointmentsByFirstName(this.revSort); break;
      }
      case 'LAST' : { this.appointmentService.sortAppointmentsByLastName(this.revSort); break;
      }
      case 'DATE' : { this.appointmentService.sortAppointmentByDate(this.revSort); break;
      }
    }

    this.prevSort = clickedHeader;
    this.ngOnInit();
  }
}
