import { Component, OnInit, Input, Output } from '@angular/core';
import { Room } from '../models/room';
import {FormGroup, FormBuilder, Validator} from '@angular/forms';
import { Flight } from '../models/flight';
@Component({
  selector: 'bp-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  @Input() roomSelected :Room | null = null;
  @Input() destination :Flight | null = null;
  @Output() pagado : any = "";
  firstName = "";
  documentNumber = 0;
  documentType = "";
  lastName = "";
  direccion = "";
  pais ="";
  ciudad = "";
  cardNumber= "";
  cardholderName = "";
  expirationDate =null;
  cvv = "";
  cardType = "";
  constructor() { }

  ngOnInit(): void {
  }

  submitPayment()
  {
    alert("PAGADO CON EXITO Monto Total = " + this.roomSelected?.price +this.destination?.price);
  };

}
