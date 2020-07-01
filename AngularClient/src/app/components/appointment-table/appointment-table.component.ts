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
  pages: number[];
  pageIndex = 0;

  prevSort = '';
  revSort: boolean;

  constructor(private appointmentService: AppointmentService,
              private patientService: PatientService) {
    // This gets an array of the number of all our appointments divided by how many
    // I want to display per page so I can dynamically create the page buttons
    this.pages = this.appointmentService.getNumPagesOfAppointments();

  }

  ngOnInit(): void {
    this.appointments = this.appointmentService.getAppointments(this.pageIndex * 12);
    console.log('Appointments array is now ' + this.appointments.toString());
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
      case 'FIRST' : {
        this.appointmentService.sortAppointmentsByFirstName(this.revSort);
        break;
      }
      case 'LAST' : {
        this.appointmentService.sortAppointmentsByLastName(this.revSort);
        break;
      }
      case 'DATE' : {
        this.appointmentService.sortAppointmentByDate(this.revSort);
        break;
      }
    }

    this.prevSort = clickedHeader;
    this.ngOnInit();
  }

  buttonClicked(ele: MouseEvent) {
    const clickedButton: string = ((ele.target as Element).id);
    console.log('Page Index is ' + this.pageIndex);
    console.log('Button pressed was ' + clickedButton);

    // If the button pressed ID is a number
    if (clickedButton.match(/\d+/g)) {
      this.pageIndex = Number(clickedButton);
      if (this.pageIndex < 0) {
        this.pageIndex = 0;
      } else if (this.pageIndex > this.pages.length) {
        this.pageIndex = this.pages.length;
      }

      console.log('(number) Page Index is ' + this.pageIndex);

    } else {
      switch (clickedButton) {
        case 'FIRST': {
          this.pageIndex = 0;
          break;
        }
        case 'PREVIOUS': {
          if (this.pageIndex > 1) {
            this.pageIndex--;
          }
          break;
        }
        case 'NEXT': {
          if (this.pageIndex >= this.pages.length - 1) {
            this.pageIndex = this.pages.length - 1;
          }else {
            this.pageIndex++;
          }
          break;
        }
        case 'LAST': {
          this.pageIndex = this.pages.length - 1;
          break;
        }
      }
      console.log('Page Index is now ' + this.pageIndex);
    }
    this.ngOnInit();
  }


}
