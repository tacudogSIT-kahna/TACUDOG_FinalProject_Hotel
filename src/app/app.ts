import { Component } from '@angular/core';
import { StayComponent } from './stay/stay';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StayComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'FinalProject_Hotel';
}
