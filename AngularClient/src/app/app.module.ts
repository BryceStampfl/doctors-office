import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserListComponent } from './TestUserDir/user-list/user-list.component';
import { UserFormComponent } from './TestUserDir/user-form/user-form.component';
import {UserService} from './TestUserDir/service/user.service';
import { HeaderComponent } from './components/header/header.component';
import { TestUserCompenentsComponent } from './TestUserDir/test-user-compenents/test-user-compenents.component';
import {AppointmentService} from './services/appointment.service';
import { AppointmentTableComponent } from './components/appointment-table/appointment-table.component';
import { HoverDirective } from './directives/hover.directive';
import { DoctorCardComponent } from './components/doctors/doctor-card/doctor-card.component';
import { DoctorProfileComponent } from './components/doctors/doctor-profile/doctor-profile.component';
import { DoctorCardListComponent } from './components/doctors/doctor-card-list/doctor-card-list.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    HeaderComponent,
    TestUserCompenentsComponent,
    AppointmentTableComponent,
    HoverDirective,
    DoctorCardComponent,
    DoctorProfileComponent,
    DoctorCardListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, AppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
