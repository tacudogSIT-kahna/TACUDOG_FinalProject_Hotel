import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomCardComponent } from '../room-card/room-card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RoomCardComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  welcomeMessage = "Welcome to the Coolest Hotel in Ooo!";
  selectedRoomMessage = "";
  activeTab: string = 'Regular';

  hotelRooms = [
    {
      name: "Candy Kingdom Standard",
      category: "Regular",
      desc: "A sweet, basic room guarded safely by the local Banana Guards.",
      price: 20,
      img: 'candy-standard.png'
    },
    {
      name: "Slime Kingdom Den",
      category: "Regular",
      desc: "Gooey but cozy! Perfect for travelers looking for a sticky budget stay.",
      price: 15,
      img: 'slime-den.png'
    },
    {
      name: "Wizard City Hostel",
      category: "Regular",
      desc: "A mystical standard room. Keep your hands off the secret spell books!",
      price: 25,
      img: 'wizard-hostel.png'
    },
    {
      name: "Wildberry Bungalow",
      category: "Deluxe",
      desc: "Spacious room loaded with fresh giant berries and wild country comfort.",
      price: 45,
      img: 'wildberry-bungalow.png'
    },
    {
      name: "Breakfast Kingdom Diner Suite",
      category: "Deluxe",
      desc: "Smells like fresh maple syrup and pancakes all day long. Cozy beds included.",
      price: 55,
      img: 'breakfast-diner.png'
    },
    {
      name: "Lumpy Space Studio",
      category: "Deluxe",
      desc: "Totally fresh and lumpy space style room. Watch out for all the drama!",
      price: 60,
      img: 'lumpy-studio.png'
    },
    {
      name: "The Tree Fort Suite",
      category: "Suite",
      desc: "Live like Finn and Jake! Complete with video games and a treasure room.",
      price: 90,
      img: 'tree-fort.png'
    },
    {
      name: "Candy Kingdom Royal Suite",
      category: "Suite",
      desc: "A sugar-coated grand flat fit for the absolute highest sweet royalty.",
      price: 150,
      img: 'candy-castle.png'
    },
    {
      name: "Fire Kingdom Flame Suite",
      category: "Suite",
      desc: "A hot, blazing luxury penthouse! High heat levels. Fire protection recommended.",
      price: 130,
      img: 'fire-suite.png'
    }
  ];

  selectTab(category: string) {
    this.activeTab = category;
  }

  handleBooking(roomName: any) {
    this.selectedRoomMessage = `Algebraic! You selected to book: ${roomName}. Check your Booking Summary!`;
  }
}