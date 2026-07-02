import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent {
  isModalOpen = false;
  modalTitle = "";
  modalBody = "";

  private contents: { [key: string]: { title: string, body: string } } = {
    privacy: {
      title: "Privacy Policy",
      body: "Welcome to the Grand Lodge data vaults. Your personal details, royal decrees, and dungeon blueprints are secured using advanced Candy Kingdom decryption protocols. Princess Bubblegum certifies that your browsing habits will never be shared with the Ice King or external multi-dimensional entities. Cookies are only tracked to ensure BMO can optimize your server speeds across Ooo."
    },
    terms: {
      title: "Terms & Conditions",
      body: "By booking a stay at the Coolest Hotel in Ooo, you agree to always keep your sword arm ready for unannounced instances of mathematical adventure. The management is not responsible for items stolen by Lumpy Space residents or armor damaged within the Flame Kingdom parameters. Disrespecting the local Banana Guards on hotel property will result in swift dungeon confinement."
    },
    contact: {
      title: "Contact Us",
      body: "Need help with your cosmic booking reservation? Reach our dispatch network directly by training a messenger owl toward Sector 7G, Grassy Plains. For emergencies involving immediate ice magic or rogue wizards, strike Peppermint Butler's summoning gong located near the main tavern deck lobby desk."
    }
  };

  openModal(type: string, event: Event) {
    event.preventDefault();
    const selection = this.contents[type];
    if (selection) {
      this.modalTitle = selection.title;
      this.modalBody = selection.body;
      this.isModalOpen = true;
    }
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
