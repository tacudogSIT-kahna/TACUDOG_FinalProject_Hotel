import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookingSummaryModule } from '../booking-summary/booking-summary';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
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
  expandedRoomIndex: string | null = null;

  restaurantState: 'idle' | 'prompting' | 'selected' = 'idle';
  restaurantCoverage: string = '';

  hotelRoomCategories = [
    {
      categoryName: "Regular Rooms",
      rooms: [
        { 
          name: "Candy Kingdom Standard", 
          price: 20, 
          img: 'Candy Kingdom Standard.png',
          beds: '1 Bed', 
          capacity: 'Good for 1-2 Adventurers',
          perks: ['Free Hot Cocoa', 'Local Kingdom Map Access'],
          desc: 'A cozy standard chamber optimized for solo voyagers or traveling pairs. Features continuous clean linen and a reinforced layout framework.'
        },
        { 
          name: "Slime Kingdom Den", 
          price: 15, 
          img: 'Slime Kingdom Den.png',
          beds: '2 Beds', 
          capacity: 'Good for 2-4 Adventurers',
          perks: ['Bouncing Mattresses', 'Acid-Proof Linens'],
          desc: 'An elastic subterranean double-bed chamber structured for group parties. Highly recommended for adventurers seeking chemical resistance.'
        },
        { 
          name: "Wizard City Hostel", 
          price: 25, 
          img: 'Wizard City Hostel.png',
          beds: '1 Bed', 
          capacity: 'Good for 1-2 Adventurers',
          perks: ['Anti-Gravity Pillow', 'Enchanted Reading Light'],
          desc: 'A mystical space designed to accommodate short mystic stays. Perfect for apprentices looking to rest before their next trial.'
        }
      ]
    },
    {
      categoryName: "Deluxe Rooms",
      rooms: [
        { 
          name: "Wildberry Bungalow", 
          price: 45, 
          img: 'Wildberry Bungalow.png',
          beds: '2 Beds', 
          capacity: 'Good for 2-4 Adventurers',
          perks: ['Fresh Berry Basket Daily', 'Private Balcony Area'],
          desc: 'An elevated wooden framework structure boasting scenery over the outer walls. Fully furnished with artisan branch furniture.'
        },
        { 
          name: "Breakfast Kingdom Diner Suite", 
          price: 55, 
          img: 'Breakfast Kingdom Diner Suite.png',
          beds: '2 Beds', 
          capacity: 'Good for 4-6 Adventurers',
          perks: ['All-You-Can-Eat Pancake Bar', 'Syrup Hot Tub Access'],
          desc: 'A deliciously scented suite boasting comfortable waffle beds and separate living tracks. Breakfast is continually active.'
        },
        { 
          name: "Lumpy Space Studio", 
          price: 60, 
          img: 'Lumpy Space Studio.png',
          beds: '1 Bed', 
          capacity: 'Good for 8-10 Adventurers',
          perks: ['Cloud Floating Cushion', 'Sassy Mirror Console'],
          desc: 'An ultra-plush purple dimension suite that eliminates hard edges entirely. Perfect for travelers seeking complete isolation.'
        }
      ]
    },
    {
      categoryName: "Luxury Suites",
      rooms: [
        { 
          name: "The Tree Fort Suite", 
          price: 90, 
          img: 'The Tree Fort Suite.png',
          beds: '2 Beds', 
          capacity: 'Good for 4-6 Adventurers',
          perks: ['Weapon Rack Access', 'BMO Video Game Station', 'Curated Vinyl Record Player'],
          desc: 'A premium treehouse environment offering unmatched overhead views of Ooo. Fully stocked with heroic tools and high-tier entertainment platforms.'
        },
        { 
          name: "Candy Kingdom Royal Suite", 
          price: 150, 
          img: 'Candy Kingdom Royal Suite.png',
          beds: '3 Beds', 
          capacity: 'Good for 4-6 Adventurers',
          perks: ['Banana Guard Escort', 'Gumball Butler Machine', 'Science Lab Pass'],
          desc: 'An elite palace level suite offering pristine crystal lighting and elegant sugar craftsmanship. Built strictly for royal delegations.'
        },
        { 
          name: "Fire Kingdom Flame Suite", 
          price: 130, 
          img: 'Fire Kingdom Flame Suite.png',
          beds: '2 Beds', 
          capacity: 'Good for 4-6 Adventurers',
          perks: ['Thermal Shield Ward', 'Obsidian Lounge', 'Spiced Core Drinks'],
          desc: 'A burning hot luxury chamber built safely inside controlled lava conduits. Fully insulated with top-tier cooling wards for exterior biological safety.'
        }
      ]
    }
  ];

  handleSignIn() {
    if (this.guestName.trim() && this.guestEmail.trim()) {
      this.isUserSignedIn = true;
    }
  }

  onRoomPicked(room: any) {
    this.selectedRoom = room;
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

  get summaryConfig() {
    return {
      guests: this.guestsCount,
      nights: this.nightsCount,
      restaurantReservation: this.restaurantState === 'selected' ? this.restaurantCoverage : null
    };
  }

  onCheckoutSubmitted(invoice: any) {
    let baseMessage = `Mathematical, ${this.guestName}! Your stay in the ${invoice.room.name} has been secured for ${invoice.details.nights} nights.`;
    if (this.restaurantState === 'selected') {
      baseMessage += ` Your restaurant reservation for the ${this.restaurantCoverage} has also been logged.`;
    }
    this.successMessage = `${baseMessage} Total: ${invoice.total} Gold Coins. Check your crystal ball for the receipt!`;
  }
}
