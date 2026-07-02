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
  isModalOpen: boolean = false;
  modalTitle: string = '';
  modalContent: string = '';

  openModal(type: string) {
    this.isModalOpen = true;
    
    if (type === 'privacy') {
      this.modalTitle = 'Candy Kingdom Privacy Protocol';
      this.modalContent = 'Your data is protected by Tier-1 encryption arrays curated personally by Princess Bubblegum. We do not sell your personal quest details, memory banks, or electronic signatures to the Ice King or dark wizard factions. Any information collected during booking stays safely inside the royal servers.';
    } else if (type === 'terms') {
      this.modalTitle = 'Ooo Global Rules & Conditions';
      this.modalContent = 'By booking a stay at the Coolest Hotel in Ooo, you agree to always keep your sword arm ready for unannounced instances of mathematical adventure. The management is not responsible for items stolen by Lumpy Space residents or armor damaged within the Flame Kingdom parameters. Disrespecting the local Banana Guards on hotel property will result in swift dungeon confinement.';
    } else if (type === 'contact') {
      this.modalTitle = 'Cosmic Communications Channel';
      this.modalContent = 'Need assistance with your booking? Reach out to our front deck transmission network!\n\n• Holo-Radio: Sector 7-G (Tuned by BMO)\n• Mail-Crow: Tree Fort Orchard Post\n• Royal Telegram: Attn: Peppermint Butler Office';
    }
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
