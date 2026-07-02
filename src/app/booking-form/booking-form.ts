import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-form.html',
  styleUrls: ['./booking-form.css']
})
export class BookingFormModule {
  @Output() formChanged = new EventEmitter<any>();

  guestsCount: number = 1;
  nightsCount: number = 1;

  updateInputs() {
    this.formChanged.emit({
      guests: this.guestsCount,
      nights: this.nightsCount
    });
  }

  changeGuests(amount: number) {
    if (this.guestsCount + amount >= 1 && this.guestsCount + amount <= 4) {
      this.guestsCount += amount;
      this.updateInputs();
    }
  }

  changeNights(amount: number) {
    if (this.nightsCount + amount >= 1) {
      this.nightsCount += amount;
      this.updateInputs();
    }
  }
}
