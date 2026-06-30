import { Component } from '@angular/core';
import { StayComponent } from './stay/stay';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StayComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FinalProject_Hotel';
}
