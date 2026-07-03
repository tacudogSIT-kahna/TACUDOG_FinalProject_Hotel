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

 // Look for your total cost variable or getter calculation inside the booking summary child file:
get totalCost() {
  if (!this.selectedRoom || !this.config) return 0;
  
  // Fall back to config.customPrice if present, otherwise use standard room baseline price
  const activeNightRate = this.config.customPrice || this.selectedRoom.price;
  
  return activeNightRate * this.config.nights;
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
