import {Injectable, OnInit} from '@angular/core';
import {Doctor} from '../models/doctor.model';
import {DataLoaderService} from './data-loader.service';


@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  doctors: Doctor[];

  constructor(private dataLoader: DataLoaderService) {
    this.doctors = this.dataLoader.loadDoctors();

  }

  getDoctors(){
    return this.doctors.slice();
  }

}
