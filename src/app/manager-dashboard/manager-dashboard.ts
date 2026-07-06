import { Component, Input, Output, EventEmitter, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingReceipt } from '../models/booking.types';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-manager-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manager-dashboard.html',
  styleUrls: ['./manager-dashboard.css']
})
export class ManagerDashboardComponent implements OnInit {
  private http = inject(HttpClient);

  @Input() historicalBookings: BookingReceipt[] = [];
  @Output() logoutTerminal = new EventEmitter<void>();

  public databaseBookings: any[] = [];

  ngOnInit() {
    this.refreshDashboardData();
  }

  refreshDashboardData() {
    console.log('Syncing data stream logs from local database backend...');
    this.http.get<any[]>('http://localhost:3000/api/bookings').subscribe({
      next: (data) => {
        this.databaseBookings = data;
        console.log('Database pipeline successfully parsed:', data);
      },
      error: (err) => {
        console.error('Pipeline recovery fatal rejection error:', err);
      }
    });
  }

  get totalDashboardGold(): number {
    return this.databaseBookings.reduce((sum, b) => sum + (b.total || 0), 0);
  }

  get totalDashboardRestoCount(): number {
    return this.databaseBookings.filter(b => b.reservedRestaurantTable === true).length;
  }
}
