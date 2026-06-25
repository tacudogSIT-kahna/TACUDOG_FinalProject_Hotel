import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.css']
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