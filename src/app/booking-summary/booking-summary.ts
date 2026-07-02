import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-summary.html',
  styleUrls: ['./booking-summary.css']
})
export class BookingSummaryModule {
  @Input() selectedRoom: any = null;
  @Input() config: any = { guests: 1, nights: 1 };
  
  @Output() submitBooking = new EventEmitter<any>();

  get totalPrice(): number {
    if (!this.selectedRoom) return 0;
    return this.selectedRoom.price * this.config.nights;
  }

  confirmBooking() {
    if (this.selectedRoom) {
      this.submitBooking.emit({
        room: this.selectedRoom,
        details: this.config,
        total: this.totalPrice
      });
    }
  }
}
