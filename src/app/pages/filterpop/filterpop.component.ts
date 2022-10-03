import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-filterpop',
  templateUrl: './filterpop.component.html',
  styleUrls: ['./filterpop.component.scss'],
})
export class FilterpopComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  tickfun(check: any) {
    if (check == 'ent') {
      $('.ent').toggleClass('activecheckbox');
    } else if (check == 'pri') {
      $('.pri').toggleClass('activecheckbox');
    } else if (check == 'sha') {
      $('.sha').toggleClass('activecheckbox');
    }
  }
}
