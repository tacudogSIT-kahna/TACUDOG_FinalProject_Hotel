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
        { name: "Jake's Most Delicious Sandwich", desc: "A legendary culinary masterpiece layered meticulously with smooth cream cheese, fresh dill gathered from the fields, pickles, a perfectly sliced boiled egg, crispy bird meat caught fresh from the window, and finished with authentic tears of absolute joy.", img: "/Jake's Most Delicious Sandwich.png" },
        { name: "Bacon Pancakes", desc: "You take some premium smoked bacon and you put it inside a golden, fluffy griddle pancake! Stacked high to the heavens, fried to crispy perfection, and heavily drenched in sweet tree syrup harvested straight from the Breakfast Kingdom forest.", img: "/Bacon Pancakes.png" },
        { name: "Everything Burrito", desc: "An absolute cosmic marvel containing literally every single edible ingredient found across the Land of Ooo. Carefully compiled, seasoned with high adventure, and wrapped incredibly tight inside a massive, warm flame-grilled flour tortilla canvas.", img: "/Everything Burrito.png" },
        { name: "Burger Monster", desc: "A terrifyingly delicious, beastly grilled meat patty layered with thick rivers of melted candy cheddar cheese, secret kingdom relish, and wild crunchy garden greens harvested from the outer grassy borders of the Tree Fort.", img: "/Burger Monster.png" },
        { name: "Soy People", desc: "Nutritious and surprisingly savory soy protein steaks engineered deep inside Princess Bubblegum's underground candy laboratories. Perfect for fueling up your stamina before entering deep, dangerous dungeon raids.", img: "/Soy People.png" }
      ]
    },
    {
      name: "🍿 Sides & Snacks",
      items: [
        { name: "Prismo's Artisanal Pickles", desc: "Crisp cucumbers brined personally by Prismo inside the yellow walls of the Time Room. Infused with celestial spices, glowing with dynamic temporal patterns, and completely timeless in flavor.", img: "/Prismo's Artisanal Pickles.png" },
        { name: "Macaroni Salad", desc: "A perfectly chilled pasta salad featuring tender elbow macaroni folded in a rich, creamy homemade mayonnaise dressing with sweet pepper bits. The ultimate sidekick side dish for any traveling hero.", img: "/Macaroni Salad.png" },
        { name: "Flakies", desc: "Super crunchy, sugar-dusted golden flake snacks that pack a massive structural crunch with every bite. Highly addictive and highly sought after by local thieves, so make sure to guard your bowl tightly!", img: "/Flakies.png" },
        { name: "Crabapple", desc: "Incredibly tart, wild crabapples gathered by hand from the rocky outer mountain ranges bordering the Candy Kingdom. Provides an explosive burst of sour energy to wake up your adventuring senses.", img: "/Crabapple.png" }
      ]
    },
    {
      name: "🍰 Sweets & Desserts",
      items: [
        { name: "Finn Cake", desc: "An algebraic sweet confection baked exclusively for recognized heroes of Ooo! Masterfully shaped to resemble Finn's iconic white hat and stuffed with a rich, sugary cream center and sweet blue piping.", img: "/Finn Cake.png" },
        { name: "BMO Cake", desc: "A highly advanced, multi-layered video-game style cake wired with colorful decorative icing details. Tastes like sweet birthday batter mixed with standard calculation science perfection.", img: "/BMO Cake.png" },
        { name: "Tree Trunk's Apple Pie", desc: "The finest sweet pie in all of Ooo, baked fresh with pure love by Tree Trunks herself. Uses secret orchard apples and a flaky, buttery golden crust that fills the whole tavern with a warm comforting scent.", img: "/Tree Trunk's Apple Pie.png" },
        { name: "Royal Tart", desc: "The rarest, most delicate pastry dessert in existence. Infused with highly guarded royal baking secrets. Make sure you don't drop or damage it on the way from the kitchen counter to your table!", img: "/Royal Tart.png" },
        { name: "Crystal Gem Apple", desc: "A stunning, translucent candied apple picked from the dangerous crystal dimensions. Gives off a soft magical sparkle and cracks open with a perfectly sweet, mineral-rich sugar glaze crunch.", img: "/Crystal Gem Apple.png" }
      ]
    },
    {
      name: "🧪 Elixirs & Beverages",
      items: [
        { name: "Super Porp", desc: "Pop open an ancient tradition! The refreshing, fizzy purple fruit soda beverage that has ruled the refreshment underground empire for cycles. Cool, sparkling, and deeply carbonated.", img: "/Super Porp.png" },
        { name: "Big Baby Rootbeer", desc: "Rich, creamy, and heavily frothy rootbeer poured fresh from the gigantic oak barrels stored deep inside the Candy Kingdom palace vats. Topped with a thick sweet cloud of foam.", img: "/Big Baby Rootbeer.png" },
        { name: "Bug Milk", desc: "A unique, nutrient-dense natural juice harvested directly from the finest subterranean dairy insects. Offers an earthy, high-protein health boost to rapidly restore lost hearts.", img: "/Bug Milk.png" },
        { name: "Jake's Espresso", desc: "A high-octane, pitch-black dark roast brew prepared personally by Jake to keep your eyes locked wide open during dangerous midnight dungeon crawls or intense card tournament matches.", img: "/Jake's Espresso.png" }
      ]
    }
  ];
}
