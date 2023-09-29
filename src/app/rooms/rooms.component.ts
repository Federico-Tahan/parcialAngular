import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { RoomService } from '../services/room.service';
import { Room } from '../models/room';
@Component({
  selector: 'bp-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  @Input() roomList:any = []
  @Input() selectedDestination: string = "";
  @Output() roomSelected = new EventEmitter<Room>();

  selectedRoom: Room | null = null;

  constructor(private roomService : RoomService) { }
  selectRoom(room: Room) {
    this.selectedRoom = room;
    this.roomSelected.emit(room);
    console.log(this.selectedRoom);
    
  }
  ngOnInit(): void {
    if (this.selectedDestination) {
      let rooms = this.roomService.GetRoomByDestinat(this.selectedDestination);
      this.roomList = rooms;
    } else {
      this.roomList = this.roomService.GetRooms();
    }
  }
}
