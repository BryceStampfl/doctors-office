import {Component, Input, OnInit} from '@angular/core';
import {Doctor} from '../../../../models/doctor.model';

@Component({
  selector: 'app-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.css']
})
export class DoctorCardComponent implements OnInit {
  @Input() doctor: Doctor;

  constructor() { }

  ngOnInit(): void {
  }

}
