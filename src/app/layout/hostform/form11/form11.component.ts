import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-form11',
  templateUrl: './form11.component.html',
  styleUrls: ['./form11.component.scss']
})
export class Form11Component implements OnInit {
  inputvalu: number | undefined;
  decrbutton = true;
  error = false;
  constructor() { }

  ngOnInit(): void {
  }
  increase() {
    if (this.inputvalu == null || this.inputvalu == undefined) {
      this.inputvalu = 820;
      this.decrbutton = true;
    } else {
      this.inputvalu = this.inputvalu! + 100;
      this.decrbutton = false;
    }
  }
  decrease() {
    if (this.inputvalu == 820) {
      this.decrbutton = true;
    } else {
      this.inputvalu = this.inputvalu! - 100
    }

  }
  inputvalucheck(e: any) {
    console.log(e.target.value);
    if (e.target.value < 820 || e.target.value > 819670) {
      this.error = true;
    } else {
      this.error = false;
    }

  }
  checkboxcheckfu() {
    console.log('button');
    $(".tickspan").toggleClass("activecheckbox")
  }

}
