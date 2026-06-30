import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { StayComponent } from './stay/stay';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'stay', component: StayComponent }
];