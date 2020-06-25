import {Injectable} from '@angular/core';
import {Patient} from '../models/patient.model';
import {DataLoaderService} from './data-loader.service';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private patients: Patient[];

  constructor(private dataLoader: DataLoaderService) {
    this.patients = this.dataLoader.loadPatients();
  }

  getAllPatients() {
    return this.patients.slice();
  }

  getPatientById(id: number) {
    for (const ele of this.patients) {
      if (ele.id === id) {
        return ele;
      }
    }
  }

}
