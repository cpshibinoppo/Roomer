import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-form12',
  templateUrl: './form12.component.html',
  styleUrls: ['./form12.component.scss']
})
export class Form12Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      $('label').click(function () {
        $(this).toggleClass('classtest');
        console.log('test');
        return false;
      })
    })
  }

}
