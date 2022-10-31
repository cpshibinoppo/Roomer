import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-from1',
  templateUrl: './from1.component.html',
  styleUrls: ['./from1.component.scss']
})
export class From1Component implements OnInit {
  nextbutton = true;

  constructor() { }

  ngOnInit(): void {
    $('.formonecardmaindiv button').click(function () {
      $('.active').removeClass('active');
      $(this).addClass('active');
    })
  }
  buttonactive(){
    this.nextbutton = true;
  }
}
