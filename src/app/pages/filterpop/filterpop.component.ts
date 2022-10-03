import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-filterpop',
  templateUrl: './filterpop.component.html',
  styleUrls: ['./filterpop.component.scss'],
})
export class FilterpopComponent implements OnInit {
  constructor() {}
  numberarraty = ['Any', 1, 2, 3, 4, 5, 6, 7, '8+'];
  ngOnInit(): void {
    $(document).ready(function () {
      $('.propertycardmaindivcard button').click(function () {
        $(this).toggleClass('propertyactive');
      });
    });
  }
  tickfun(check: any) {
    if (check == 'ent') {
      $('.ent').toggleClass('activecheckbox');
    } else if (check == 'pri') {
      $('.pri').toggleClass('activecheckbox');
    } else if (check == 'sha') {
      $('.sha').toggleClass('activecheckbox');
    }
  }
  roomfun() {
    $('.btnmainbedroom button').click(function () {
      $('.fistbtn').removeClass('fistbtn');
      $('.btnn').removeClass('roomactive');
      $(this).addClass('roomactive');
    });
    $('.btnmainbeds button').click(function () {
      $('.fistbtnbeds').removeClass('fistbtnbeds');
      $('.btnbeds').removeClass('roomactive');
      $(this).addClass('roomactive');
    });
    $('.btnmainbat button').click(function () {
      $('.fistbtnbat').removeClass('fistbtnbat');
      $('.btnbat').removeClass('roomactive');
      $(this).addClass('roomactive');
    });
  }
}
