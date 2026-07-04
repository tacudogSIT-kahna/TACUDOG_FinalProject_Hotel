import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookingSummaryComponent } from '../booking-summary/booking-summary';
import { ManagerLoginComponent } from '../manager-login/manager-login';
import { ManagerDashboardComponent } from '../manager-dashboard/manager-dashboard';
import { BookingReceipt } from '../models/booking.types';

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
  isUserSignedIn: boolean = false;
  guestName: string = '';
  guestEmail: string = '';

  selectedRoom: any = null;
  guestsCount: number = 1;
  nightsCount: number = 1;
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

  changeNights(amount: number) {
    if (this.nightsCount + amount >= 1) {
      this.nightsCount += amount;
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

    this.checkoutReceipt = generatedReceipt;
    this.historicalBookings.unshift(generatedReceipt);
  }

  clearReceiptSession() {
    this.checkoutReceipt = null;
    this.selectedRoom = null;
    this.guestsCount = 1;
    this.nightsCount = 1;
    this.restaurantState = 'idle';
    this.restaurantCoverage = '';
  }
}
