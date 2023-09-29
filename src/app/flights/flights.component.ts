import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'bp-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  constructor(private flight : FlightService) { }
  
  vuelos :any = []
  @Output() validateflight = new EventEmitter<string>(); 
  DestinationId:string = ""
  ngOnInit(): void {
    this.vuelos = this.flight.GetFlights();
 }
  emitEvent(destinationId: string) {
    this.validateflight.emit(destinationId)
  }


}
