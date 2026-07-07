import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookingSummaryComponent } from '../booking-summary/booking-summary';
import { ManagerLoginComponent } from '../manager-login/manager-login';
import { ManagerDashboardComponent } from '../manager-dashboard/manager-dashboard';
import { BookingReceipt } from '../models/booking.types';
import { BookingService } from '../booking-service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    BookingSummaryComponent,
    ManagerLoginComponent,
    ManagerDashboardComponent
  ],
  templateUrl: './booking-form.html',
  styleUrls: ['./booking-form.css']
})
export class BookingFormComponent implements OnInit {
  private bookingService = inject(BookingService);
  private http = inject(HttpClient);

  isUserSignedIn: boolean = false;
  guestName: string = '';
  guestEmail: string = '';
  
  checkInDate: string = '';
  checkOutDate: string = '';
  
  // Track today's date string to restrict past calendar options
  minCheckInDate: string = '';

  uiErrorMessage: string = '';
  isDateSelectionConflict: boolean = false;

  selectedRoom: any = null;
  guestsCount: number = 1;
  expandedRoomIndex: string | null = null;

  restaurantState: 'idle' | 'prompting' | 'selected' = 'idle';
  restaurantCoverage: string = '';
  checkoutReceipt: BookingReceipt | null = null;

  currentView: 'guest' | 'manager-login' | 'manager-dashboard' = 'guest';

  hotelRoomCategories = [
    {
      categoryName: "Regular Rooms",
      rooms: [
        { name: "Candy Kingdom Standard", price: 20, img: 'Candy Kingdom Standard.png', beds: '1 Bed', minCap: 1, maxCap: 2, perks: ['Free Hot Cocoa', 'Local Kingdom Map Access'], desc: 'A cozy standard chamber optimized for solo voyagers or traveling pairs.' },
        { name: "Slime Kingdom Den", price: 15, img: 'Slime Kingdom Den.png', beds: '2 Beds', minCap: 1, maxCap: 4, perks: ['Bouncing Mattresses', 'Acid-Proof Linens'], desc: 'An elastic subterranean double-bed chamber structured for group parties.' },
        { name: "Wizard City Hostel", price: 25, img: 'Wizard City Hostel.png', beds: '1 Bed', minCap: 1, maxCap: 2, perks: ['Anti-Gravity Pillow', 'Enchanted Reading Light'], desc: 'A mystical space designed to accommodate short mystic stays.' }
      ]
    },
    {
      categoryName: "Deluxe Rooms",
      rooms: [
        { name: "Wildberry Bungalow", price: 45, img: 'Wildberry Bungalow.png', beds: '2 Beds', minCap: 1, maxCap: 4, perks: ['Fresh Berry Basket Daily', 'Private Balcony Area'], desc: 'An elevated wooden framework structure boasting scenery over the outer walls.' },
        { name: "Breakfast Kingdom Diner Suite", price: 55, img: 'Breakfast Kingdom Diner Suite.png', beds: '2 Beds', minCap: 1, maxCap: 6, perks: ['All-You-Can-Eat Pancake Bar', 'Syrup Hot Tub Access'], desc: 'A deliciously scented suite boasting comfortable waffle beds.' },
        { name: "Lumpy Space Studio", price: 60, img: 'Lumpy Space Studio.png', beds: '1 Bed', minCap: 1, maxCap: 10, perks: ['Cloud Floating Cushion', 'Sassy Mirror Console'], desc: 'An ultra-plush purple dimension suite that eliminates hard edges entirely.' }
      ]
    },
    {
      categoryName: "Luxury Suites",
      rooms: [
        { name: "The Tree Fort Suite", price: 90, img: 'The Tree Fort Suite.png', beds: '2 Beds', minCap: 1, maxCap: 6, perks: ['Weapon Rack Access', 'BMO Video Game Station'], desc: 'A premium treehouse environment offering unmatched overhead views of Ooo.' },
        { name: "Candy Kingdom Royal Suite", price: 150, img: 'Candy Kingdom Royal Suite.png', beds: '3 Beds', minCap: 1, maxCap: 6, perks: ['Banana Guard Escort', 'Science Lab Pass'], desc: 'An elite palace level suite offering pristine crystal lighting.' },
        { name: "Fire Kingdom Flame Suite", price: 130, img: 'Fire Kingdom Flame Suite.png', beds: '2 Beds', minCap: 1, maxCap: 6, perks: ['Thermal Shield Ward', 'Obsidian Lounge'], desc: 'A burning hot luxury chamber built safely inside controlled lava conduits.' }
      ]
    }
  ];

  historicalBookings: BookingReceipt[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['view'] === 'manager') {
        this.currentView = 'manager-login';
      } else {
        this.currentView = 'guest';
      }
    });

    // Set standard linear lower bound restriction to avoid historical past date bookings
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    this.minCheckInDate = `${yyyy}-${mm}-${dd}`;
  }

  get nightsCount(): number {
    if (!this.checkInDate || !this.checkOutDate) return 1;
    
    const start = new Date(this.checkInDate);
    const end = new Date(this.checkOutDate);
    const timeDiff = end.getTime() - start.getTime();
    
    if (timeDiff <= 0) return 1;
    
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  }

  validateSelectedDatesLive() {
    this.uiErrorMessage = '';
    this.isDateSelectionConflict = false;

    if (!this.selectedRoom) return;

    if (this.checkInDate && this.checkOutDate) {
      if (new Date(this.checkOutDate) <= new Date(this.checkInDate)) {
        this.uiErrorMessage = 'Check-Out date must be set after your Check-In date!';
        this.isDateSelectionConflict = true;
        this.checkOutDate = ''; // Reset conflicting element instantly
        return;
      }
    }

    if (!this.checkInDate) return;

    // Scan database collection logs asynchronously to see if this day is already taken
    this.http.get<any[]>('http://localhost:3000/api/bookings').subscribe({
      next: (bookings) => {
        const isTaken = bookings.some(b => 
          b.selectedRoom === this.selectedRoom.name && b.stayDate === this.checkInDate
        );

        if (isTaken) {
          this.uiErrorMessage = `The ${this.selectedRoom.name} is ALREADY taken on ${this.checkInDate}! Quarters unavailable.`;
          this.isDateSelectionConflict = true;
          this.checkInDate = ''; // Gray out and instantly empty picker content to clear errors
        }
      }
    });
  }

  switchView(target: 'guest' | 'manager-login' | 'manager-dashboard') {
    this.currentView = target;
  }

  handleSignIn() {
    if (this.guestName.trim() && this.guestEmail.trim()) {
      this.isUserSignedIn = true;
    }
  }

  onRoomPicked(room: any) {
    this.selectedRoom = room;
    this.guestsCount = 1;
    this.validateSelectedDatesLive();
  }

  toggleDescription(roomName: string, event: Event) {
    event.stopPropagation();
    this.expandedRoomIndex = this.expandedRoomIndex === roomName ? null : roomName;
  }

  promptRestaurantOptions() {
    this.restaurantState = 'prompting';
  }

  selectRestaurantCoverage(coverage: string) {
    this.restaurantCoverage = coverage;
    this.restaurantState = 'selected';
  }

  changeGuests(amount: number) {
    if (!this.selectedRoom) return;
    const newCount = this.guestsCount + amount;
    if (newCount >= this.selectedRoom.minCap && newCount <= this.selectedRoom.maxCap) {
      this.guestsCount = newCount;
    }
  }

  calculateTotal() {
    if (!this.selectedRoom) return 0;
    const extraGuests = this.guestsCount - 1;
    const totalRoomCost = (this.selectedRoom.price + (extraGuests * (this.selectedRoom.price / 2))) * this.nightsCount;
    
    let restaurantCost = 0;
    if (this.restaurantState === 'selected') {
      restaurantCost = this.restaurantCoverage === 'Whole Stay' 
        ? 3 * this.guestsCount * this.nightsCount 
        : 3 * this.guestsCount;
    }
    return totalRoomCost + restaurantCost;
  }

  get summaryConfig() {
    return {
      guests: this.guestsCount,
      nights: this.nightsCount,
      computedTotal: this.calculateTotal(),
      restaurantReservation: this.restaurantState === 'selected' ? this.restaurantCoverage : null
    };
  }

  onCheckoutSubmitted(invoice: any) {
    if (!this.checkInDate || !this.checkOutDate) {
      this.uiErrorMessage = 'Please fill out both Check-In and Check-Out date fields first!';
      return;
    }

    if (this.isDateSelectionConflict) {
      this.uiErrorMessage = 'Cannot proceed. The selected dates are conflicting or unavailable!';
      return;
    }

    const extraGuests = this.guestsCount - 1;
    const extraGuestsTotalFee = extraGuests * (this.selectedRoom.price / 2);
    const singleNightRoomRate = this.selectedRoom.price + extraGuestsTotalFee;
    const totalRoomCost = singleNightRoomRate * this.nightsCount;

    let restaurantCost = 0;
    if (this.restaurantState === 'selected') {
      restaurantCost = this.restaurantCoverage === 'Whole Stay' 
        ? 3 * this.guestsCount * this.nightsCount 
        : 3 * this.guestsCount;
    }

    const generatedReceipt: BookingReceipt = {
      guestName: this.guestName,
      guestEmail: this.guestEmail,
      roomName: this.selectedRoom.name,
      roomBasePrice: this.selectedRoom.price,
      extraGuestsCount: extraGuests,
      extraGuestsTotalFee: extraGuestsTotalFee,
      singleNightRoomRate: singleNightRoomRate,
      nights: this.nightsCount,
      totalRoomCost: totalRoomCost,
      restaurantCoverage: this.restaurantState === 'selected' ? this.restaurantCoverage : null,
      restaurantCost: restaurantCost,
      grandTotal: this.calculateTotal()
    };

    const dbPayload = {
      name: this.guestName,
      email: this.guestEmail,
      selectedRoom: this.selectedRoom.name,
      partySize: this.guestsCount,
      reservedRestaurantTable: this.restaurantState === 'selected',
      restaurantCoverage: this.restaurantState === 'selected' ? this.restaurantCoverage : '',
      stayDate: this.checkInDate,checkOutDate: this.checkOutDate,total: this.calculateTotal()};this.bookingService.saveBooking(dbPayload).subscribe({next: (response) => {console.log('Saved to MongoDB successfully:', response);this.checkoutReceipt = generatedReceipt;this.historicalBookings.unshift(generatedReceipt);},error: (err) => {console.error('Failed to update database tracking:', err);if (err.status === 409) {this.uiErrorMessage = err.error.message;this.isDateSelectionConflict = true;this.checkInDate = '';} else {this.uiErrorMessage = 'An error occurred while handling your booking request.';}}});}clearReceiptSession() {this.checkoutReceipt = null;this.selectedRoom = null;this.guestsCount = 1;this.restaurantState = 'idle';this.restaurantCoverage = '';this.checkInDate = '';this.checkOutDate = '';this.uiErrorMessage = '';this.isDateSelectionConflict = false;}}
      