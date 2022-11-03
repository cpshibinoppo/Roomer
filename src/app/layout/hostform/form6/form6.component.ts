import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form6',
  templateUrl: './form6.component.html',
  styleUrls: ['./form6.component.scss']
})
export class Form6Component implements OnInit {
 dur = 3.3333333333333335;
  constructor() { }

  ngOnInit(): void {
    $( "#trigger" ).click(function() {
      // document.getElementById("ani-circle").beginElement();
    });
  }

}
