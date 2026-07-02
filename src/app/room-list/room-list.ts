import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './room-list.html',
  styleUrls: ['./room-list.css']
})
export class RoomListModule {
  @Input() rooms: any[] = [];
  @Output() roomSelected = new EventEmitter<any>();

  selectedRoomId: string = '';

  selectRoom(room: any) {
    this.selectedRoomId = room.name;
    this.roomSelected.emit(room);
  }
}
