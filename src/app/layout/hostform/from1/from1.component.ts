import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-from1',
  templateUrl: './from1.component.html',
  styleUrls: ['./from1.component.scss']
})
export class From1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('button').click(function () {
      $('.active').removeClass('active');
      $(this).addClass('active');
    })
  }
}
