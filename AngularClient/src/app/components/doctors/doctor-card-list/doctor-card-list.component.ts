import { Component, OnInit } from '@angular/core';
import {DoctorsService} from '../../../services/doctors.service';
import {Doctor} from '../../../models/doctor.model';

@Component({
  selector: 'app-doctor-card-list',
  templateUrl: './doctor-card-list.component.html',
  styleUrls: ['./doctor-card-list.component.css']
})
export class DoctorCardListComponent implements OnInit {
    doctors: Doctor[];


  constructor(private doctorService: DoctorsService) {
  }

  ngOnInit(): void {
    this.doctors = this.doctorService.getDoctors();
  }

}
