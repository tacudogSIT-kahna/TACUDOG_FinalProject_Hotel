import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { StayComponent } from './stay/stay';
import { CafeMenuComponent } from './cafe-menu/cafe-menu';
import { BookingFormComponent } from './booking-form/booking-form';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'stay', component: StayComponent },
  { path: 'cafe-menu', component: CafeMenuComponent },
  { path: 'booking-form', component: BookingFormComponent }
];
