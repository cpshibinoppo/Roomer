import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form10',
  templateUrl: './form10.component.html',
  styleUrls: ['./form10.component.scss']
})
export class Form10Component implements OnInit {
  typingindex: number = 59;
  error = false;

  constructor() { }

  ngOnInit(): void {
  }
  inputvalcheck(val: any) {
    this.typingindex = val.target.value.length;
    if (this.typingindex > 500) {
      this.error = true;
    } else {
      this.error = false;
    }
  }
}
