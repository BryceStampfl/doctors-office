import {Injectable} from '@angular/core';
import {Patient} from '../models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private patients: Patient[] = [
    new Patient(1, 'Bryce', 'Stampfl', '916-803-8473'),
    new Patient(2, 'Thor', 'Ragnarok', '123-456-7890'),
    new Patient(3, 'John', 'Cena', '666-666-6666'),
    new Patient(4, 'Jennifer', 'Lawrence', '987-654-3211')
  ];

  constructor() {
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
