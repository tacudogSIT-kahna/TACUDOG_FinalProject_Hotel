import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  welcomeMessage = "Welcome to the Coolest Hotel in Ooo!";
  selectedRoomMessage = "";

  hotelRooms = [
    {
      name: "The Tree Fort Suite",
      desc: "Live like Finn and Jake! Complete with video games and a treasure room.",
      price: 50,
      img: "assets/images/tree-fort.png"
    },
    {
      name: "Candy Kingdom Royal Suite",
      desc: "A sweet, sugar-coated room guarded by the Banana Guards. Perfect for royalty.",
      price: 120,
      img: "assets/images/candy-castle.png"
    },
    {
      name: "Ice Kingdom Freeze Room",
      desc: "Brrr! Cool down with Gunter in this frozen paradise. BYO sweaters.",
      price: 30,
      img: "assets/images/ice-kingdom.png"
    }
  ];

  handleBooking(roomName: string) {
    this.selectedRoomMessage = `Algebraic! You selected to book: ${roomName}. Check your Booking Summary!`;
  }
}
