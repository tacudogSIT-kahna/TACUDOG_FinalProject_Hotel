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
  welcomeTitle = "Welcome to the Coolest Hotel in Ooo!";
  mainIntro = "Nestled deep within the Land of Ooo, we offer adventurers, royalty, and lumps the ultimate cosmic getaway!";
  subIntro = "Whether you are resting your sword arm after fighting evil or hiding from the Ice King, your mathematical oasis awaits.";
  
  menuTitle = "🍔 Candy Tavern & Resto Menu";
  menuIntro = "Stop by our main dining deck! Curated personally by Princess Bubblegum and cooked with tier-1 baking magic.";

  foodItems = [
    {
      name: "Bacon Pancakes Deluxe",
      desc: "Take some bacon and put it in a pancake! Lightly fried, stacked high, and drenched in sweet syrup from the Breakfast Kingdom.",
      price: 8,
      icon: "🥓🥞",
      styleClass: "direct-bacon"
    },
    {
      name: "Tree Trunks' Apple Pie",
      desc: "Warm, freshly baked apple pie made with love by Tree Trunks herself. Baked using secret orchard apples. Absolutely mathematical!",
      price: 5,
      icon: "🍎🥧",
      styleClass: "wild-apple"
    },
    {
      name: "Gumdrop Soda Pop",
      desc: "A fizzy, glowing beverage straight from the Candy Kingdom laboratories. Pop the top and watch it sparkle with sugar science energy.",
      price: 3,
      icon: "🍹🍬",
      styleClass: "bubble-juice"
    }
  ];
}
