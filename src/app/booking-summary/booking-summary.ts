import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-summary.html',
  styleUrls: ['./booking-summary.css']
})
export class BookingSummaryComponent {
  @Input() selectedRoom: any = null;
  @Input() config: any = { guests: 1, nights: 1, computedTotal: 0, restaurantReservation: null };
  @Output() submitBooking = new EventEmitter<any>();

  confirmBooking() {
    if (!this.selectedRoom) return;
    this.submitBooking.emit({
      room: this.selectedRoom,
      details: this.config,
      total: this.config.computedTotal
    });
  }
}
