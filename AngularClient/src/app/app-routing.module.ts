import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from './TestUserDir/user-list/user-list.component';
import {UserFormComponent} from './TestUserDir/user-form/user-form.component';
import {AppointmentTableComponent} from './components/appointment-table/appointment-table.component';
import {DoctorCardListComponent} from './components/doctors/doctor-card-list/doctor-card-list.component';
import {HomeComponent} from './components/home/home.component';


const routes: Routes = [
  {path: 'users', component: UserListComponent},
  {path: 'adduser', component: UserFormComponent},
  {path: 'appointments', component: AppointmentTableComponent},
  {path: 'doctors', component: DoctorCardListComponent},
  {path: 'home', component: HomeComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {path: '*', component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
