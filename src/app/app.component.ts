import { Component, Input } from '@angular/core';
import { Room } from './models/room';
import { FlightService } from './services/flight.service';
import { Flight } from './models/flight';
@Component({
  selector: 'bp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'booking-process';
  SelectedDestination: string = "";
  roomSelected: Room | null = null;
  DestinationSelected: Flight | null = null;

  constructor(private fligthService: FlightService ){}
  onOpenFlights() {
    this.SelectedDestination = "";
    this.DestinationSelected = null;
    this.roomSelected = null;
  }

  onFlightSelected(destination: string) {
    this.SelectedDestination = destination;
    this.DestinationSelected = this.fligthService.GetFlight(destination)?? null;
  }
  onRoomSelected(room : Room)
  {
    this.roomSelected = room;
  }
}
