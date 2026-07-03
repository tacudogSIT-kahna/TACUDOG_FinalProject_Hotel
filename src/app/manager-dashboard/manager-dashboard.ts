import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingReceipt } from '../models/booking.types';

@Component({
  selector: 'app-manager-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manager-dashboard.html'
})
export class ManagerDashboardComponent {
  @Input() historicalBookings: BookingReceipt[] = [];
  @Output() logoutTerminal = new EventEmitter<void>();

  get totalDashboardGold(): number {
    return this.historicalBookings.reduce((sum, b) => sum + b.grandTotal, 0);
  }

  get totalDashboardNights(): number {
    return this.historicalBookings.reduce((sum, b) => sum + b.nights, 0);
  }

  get totalDashboardRestoCount(): number {
    return this.historicalBookings.filter(b => b.restaurantCoverage).length;
  }
}
