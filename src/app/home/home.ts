import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  welcomeTitle = "Welcome to The Land of Ooo Grand Lodge";
  welcomeSubtitle = "Where Cosmic Luxury Meets Infinite Adventure";
  welcomeDesc = "Experience hospitality redefined in the heart of Ooo. Spanning from the sugary sweet borders of the Candy Kingdom to the majestic peaks of Mt. Cragdor, our sanctuary offers unparalleled comfort for travelers, heroes, and seasonal royalty alike. Unwind after an algebraic quest or seek safe haven from the elements within our masterfully curated glass-frosted architecture.";

  amenitiesTitle = "Premium Lodge Amenities";
  amenities = [
    { title: "Kingdom Shuttle", detail: "Complimentary Hot Air Balloon transport across all major territories." },
    { title: "Wizard Spa & Baths", detail: "Rejuvenating element-infused therapeutic steam springs." },
    { title: "24/7 Shielding", detail: "Elite security patrols managed directly by seasoned Banana Guards." },
    { title: "Cosmic Wi-Fi", detail: "High-speed multi-dimensional network connections tuned by BMO." }
  ];

  policyTitle = "Lodge Overview & Guidelines";
  policies = [
    { label: "Check-In / Out", value: "Arrival: 2:00 PM | Departure: 11:00 AM (Land of Ooo Standard Time)" },
    { label: "Guest Protection", value: "Fire protection wards are mandatory when entering volcanic suite parameters." },
    { label: "Lodge Location", value: "Coordinates: Sector 7G, Grassy Plains Bordering Ice Kingdom Borders" }
  ];

  roomsHeader = "Hotel Room and Suites";
  roomsImg = "/The Tree Fort Suite.png";
  roomsDesc = "Nestled deep within the Land of Ooo, our custom standard rooms, deluxe bunks, and luxury suites offer adventurers, cosmic royalty, and lumpy residents a completely mathematical getaway. Relax after a long sword battle or hide out safely from the Ice King!";
  roomsBtnText = "Book Now";

  diningHeader = "Restaurant and Bar";
  diningImg = "/Peppermint Butler.png"; 
  diningDesc = "Stop by our grand tavern dining room deck! Sip on fizzy Gumdrop Soda Pops straight from the Candy Kingdom laboratories, or dig into stacks of Bacon Pancakes cooked with elite baking science magic personally curated by Princess Bubblegum.";
  diningBtnText = "Book a table";
}