import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RoomCardComponent } from '../room-card/room-card';

@Component({
  selector: 'app-stay',
  standalone: true,
  imports: [
    CommonModule, 
    RoomCardComponent
  ],
  templateUrl: './stay.html',
  styleUrls: ['./stay.css']
})
export class StayComponent {

  constructor(private router: Router) {}

  hotelRooms = [
    { name: "Candy Kingdom Standard", category: "Regular", desc: "A sweet, basic room guarded safely by the local Banana Guards.", price: 20, img: 'Candy Kingdom Standard.png' },
    { name: "Slime Kingdom Den", category: "Regular", desc: "Gooey but cozy! Perfect for travelers looking for a sticky budget stay.", price: 15, img: 'Slime Kingdom Den.png' },
    { name: "Wizard City Hostel", category: "Regular", desc: "A mystical standard room. Keep your hands off the secret spell books!", price: 25, img: 'Wizard City Hostel.png' },
    { name: "Wildberry Bungalow", category: "Deluxe", desc: "Spacious room loaded with fresh giant berries and wild country comfort.", price: 45, img: 'Wildberry Bungalow.png' },
    { name: "Breakfast Kingdom Diner Suite", category: "Deluxe", desc: "Smells like fresh maple syrup and pancakes all day long. Cozy beds included.", price: 55, img: 'Breakfast Kingdom Diner Suite.png' },
    { name: "Lumpy Space Studio", category: "Deluxe", desc: "Totally fresh and lumpy space style room. Watch out for all the drama!", price: 60, img: 'Lumpy Space Studio.png' },
    { name: "The Tree Fort Suite", category: "Suite", desc: "Live like Finn and Jake! Complete with video games and a treasure room.", price: 90, img: 'The Tree Fort Suite.png' },
    { name: "Candy Kingdom Royal Suite", category: "Suite", desc: "A sugar-coated grand flat fit for the absolute highest sweet royalty.", price: 150, img: 'Candy Kingdom Royal Suite.png' },
    { name: "Fire Kingdom Flame Suite", category: "Suite", desc: "A hot, blazing luxury penthouse! High heat levels. Fire protection recommended.", price: 130, img: 'Fire Kingdom Flame Suite.png' }
  ];

  onFinalCheckoutSubmitted() {
    // Automatically navigates the traveler straight to the booking-form authentication gateway tab
    this.router.navigate(['/booking-form']);
  }
}
