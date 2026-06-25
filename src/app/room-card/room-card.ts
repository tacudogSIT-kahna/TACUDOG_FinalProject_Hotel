import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-room-card',
  standalone: true,
  templateUrl: './room-card.html',
  styleUrls: ['./room-card.css']
})
export class RoomCardComponent {
  @Input() roomName: string = '';
  @Input() description: string = '';
  @Input() price: number = 0;
  @Input() image: string = '';

  @Output() bookRoom = new EventEmitter<string>();

  onBookClick() {
    this.bookRoom.emit(this.roomName);
  }
}
