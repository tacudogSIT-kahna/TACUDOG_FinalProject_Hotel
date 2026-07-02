import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RoomListModule } from '../room-list/room-list';
import { BookingSummaryModule } from '../booking-summary/booking-summary';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RoomListModule,
    BookingSummaryModule
  ],
  templateUrl: './booking-form.html',
  styleUrls: ['./booking-form.css']
})
export class BookingFormComponent {
  isUserSignedIn: boolean = false;
  guestName: string = '';
  guestEmail: string = '';

  selectedRoom: any = null;
  guestsCount: number = 1;
  nightsCount: number = 1;
  successMessage: string = '';

  hotelRooms = [
    { name: "Candy Kingdom Standard", price: 20 },
    { name: "Slime Kingdom Den", price: 15 },
    { name: "Wizard City Hostel", price: 25 },
    { name: "Wildberry Bungalow", price: 45 },
    { name: "Breakfast Kingdom Diner Suite", price: 55 },
    { name: "Lumpy Space Studio", price: 60 },
    { name: "The Tree Fort Suite", price: 90 },
    { name: "Candy Kingdom Royal Suite", price: 150 },
    { name: "Fire Kingdom Flame Suite", price: 130 }
  ];

  handleSignIn() {
    if (this.guestName.trim() && this.guestEmail.trim()) {
      this.isUserSignedIn = true;
    }
  }

  onRoomPicked(room: any) {
    this.selectedRoom = room;
  }

  changeGuests(amount: number) {
    if (this.guestsCount + amount >= 1 && this.guestsCount + amount <= 4) {
      this.guestsCount += amount;
    }
  }

  changeNights(amount: number) {
    if (this.nightsCount + amount >= 1) {
      this.nightsCount += amount;
    }
  }

  get summaryConfig() {
    return {
      guests: this.guestsCount,
      nights: this.nightsCount
    };
  }

  onCheckoutSubmitted(invoice: any) {
    this.successMessage = `Mathematical, ${this.guestName}! Your stay in the ${invoice.room.name} has been secured for ${invoice.details.nights} nights. Total: ${invoice.total} Gold Coins. Check your crystal ball for the receipt!`;
  }
}
