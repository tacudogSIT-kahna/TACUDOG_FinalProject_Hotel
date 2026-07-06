import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/bookings';

  bookingList = signal<any[]>([]);

  fetchBookings() {
    this.http.get<any[]>(this.apiUrl).subscribe(data => this.bookingList.set(data));
  }

  saveBooking(data: any) {
    return this.http.post(this.apiUrl, data);
  }
}
