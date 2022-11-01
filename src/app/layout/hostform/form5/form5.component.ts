import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form5',
  templateUrl: './form5.component.html',
  styleUrls: ['./form5.component.scss']
})
export class Form5Component implements OnInit {
  guests = {
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  };
  constructor() { }

  ngOnInit(): void {
  }
  addadults() {
    if (this.guests.adults == 0) {
      this.guests.adults = 1;
    }
  }

}
