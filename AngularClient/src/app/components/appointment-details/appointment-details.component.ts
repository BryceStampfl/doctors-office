import {Component, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent implements OnInit {
  childSelectedTab = 'appointment';

  constructor() {
  }

  ngOnInit(): void {
  }

  getOutputVal(tab: string){
    this.childSelectedTab = tab;
  }

}
