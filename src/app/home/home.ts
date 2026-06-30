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
  roomsHeader = "Hotel Room and Suites";
  roomsImg = "/The Tree Fort Suite.png";
  roomsDesc = "Nestled deep within the Land of Ooo, our custom standard rooms, deluxe bunks, and luxury suites offer adventurers, cosmic royalty, and lumpy residents a completely mathematical getaway. Relax after a long sword battle or hide out safely from the Ice King!";
  roomsBtnText = "Book Now";

  diningHeader = "Restaurant and Bar";
  diningImg = "/Breakfast Kingdom Diner Suite.png"; 
  diningDesc = "Stop by our grand tavern dining room deck! Sip on fizzy Gumdrop Soda Pops straight from the Candy Kingdom laboratories, or dig into stacks of Bacon Pancakes cooked with elite baking science magic personally curated by Princess Bubblegum.";
  diningBtnText = "Book a table";
}
