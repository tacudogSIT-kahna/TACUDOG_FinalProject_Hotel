import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cafe-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cafe-menu.html',
  styleUrls: ['./cafe-menu.css']
})
export class CafeMenuComponent {
  menuTitle = "⚔️ The Candy Kingdom Tavern Menu";
  menuSubtitle = "Mathematical dishes crafted with level-99 baking science and cosmic flavor profiles.";

  categories = [
    {
      name: "🍔 Signatures & Mains",
      items: [
        { name: "Jake's Most Delicious Sandwich", desc: "Cream cheese, dill, pickles, boiled egg, bird from the window, and tears of joy.", price: 15, img: "/Jake's Most Delicious Sandwich.png" },
        { name: "Bacon Pancakes", desc: "Take some bacon and you put it in a pancake! Stacked high and layered with country syrup.", price: 8, img: "/Bacon Pancakes.png" },
        { name: "Everything Burrito", desc: "Literally everything in Ooo wrapped tightly inside a giant warm tortilla canvas.", price: 14, img: "/Everything Burrito.png" },
        { name: "Burger Monster", desc: "A beastly, grilled patty layered with melty cheese and wild garden greens.", price: 10, img: "/Burger Monster.png" },
        { name: "Soy People", desc: "Mysterious but nutritious soy protein block steaks straight from the underground labs.", price: 7, img: "/Soy People.png" }
      ]
    },
    {
      name: "🍿 Sides & Snacks",
      items: [
        { name: "Prismo's Artisanal Pickles", desc: "Brined personally by Prismo in the Time Room. Crisp, glowing, and timeless.", price: 5, img: "/Prismo's Artisanal Pickles.png" },
        { name: "Macaroni Salad", desc: "Chilled macaroni pasta folded in custom dressing. Perfect sidekick for an adventure.", price: 4, img: "/Macaroni Salad.png" },
        { name: "Flakies", desc: "Super crunchy, sugar-dusted flake snacks. Don't let your friends steal them!", price: 3, img: "/Flakies.png" },
        { name: "Crabapple", desc: "Tart, wild crabapples gathered from the Grassy Plains border.", price: 2, img: "/Crabapple.png" }
      ]
    },
    {
      name: "🍰 Sweets & Desserts",
      items: [
        { name: "Finn Cake", desc: "Exclusively baked for heroes! Shaped like Finn's hat with delicious blue frosting.", price: 6, img: "/Finn Cake.png" },
        { name: "BMO Cake", desc: "An algebraic, multi-layered sweet confection cake wired with vibrant icing detail.", price: 7, img: "/BMO Cake.png" },
        { name: "Tree Trunk's Apple Pie", desc: "Warm, freshly baked pie made with secret orchard apples and pure love.", price: 5, img: "/Tree Trunk's Apple Pie.png" },
        { name: "Royal Tart", desc: "The rarest dessert in Ooo. Guard it with your life on the way to your table.", price: 12, img: "/Royal Tart.png" },
        { name: "Crystal Gem Apple", desc: "A glassy, glowing candied apple picked from the dangerous Crystal Dimension.", price: 6, img: "/Crystal Gem Apple.png" }
      ]
    },
    {
      name: "🧪 Elixirs & Beverages",
      items: [
        { name: "Super Porp", desc: "Pop the top! The ancient, fizzy purple soda drink that rules the refreshment empire.", price: 4, img: "/Super Porp.png" },
        { name: "Big Baby Rootbeer", desc: "Rich, sweet, frothy rootbeer poured straight from the Candy Kingdom barrel vats.", price: 4, img: "/Big Baby Rootbeer.png" },
        { name: "Bug Milk", desc: "Nutrient-packed juice directly from the finest local subterranean insects.", price: 3, img: "/Bug Milk.png" },
        { name: "Jake's Espresso", desc: "A high-octane dark roast blend that keeps you awake during dangerous dungeon raids.", price: 5, img: "/Jake's Espresso.png" }
      ]
    }
  ];
}