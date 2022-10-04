import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-phnavbarpopup',
  templateUrl: './phnavbarpopup.component.html',
  styleUrls: ['./phnavbarpopup.component.scss'],
})
export class PhnavbarpopupComponent implements OnInit {
  guests = {
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  };
  constructor() {
    $(document).ready(function () {
      $('.headerbtnmaindiv button').click(function () {
        var check = $(this).text();
        if (check == 'Experiences') {
          $('.headerline').css({ left: '70px', width: '90px' });
        } else {
          $('.headerline').css({ left: '10px', width: '40px' });
        }
        $('.headerbtnmaindiv button').removeClass('headerbutactive');
        $(this).addClass('headerbutactive');
      });
    });
  }

  ngOnInit(): void {}
  addadults() {
    if (this.guests.adults == 0) {
      this.guests.adults = 1;
    }
  }
}
