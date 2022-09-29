import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from 'src/app/layout/navbar/navbar.component';

@Component({
  selector: 'app-logoinandsighup',
  templateUrl: './logoinandsighup.component.html',
  styleUrls: ['./logoinandsighup.component.scss'],
})
export class LogoinandsighupComponent implements OnInit {
  numberinpid: any;
  phoneinputid: any;
  constructor(public navbarcom: NavbarComponent) {}

  ngOnInit(): void {
    this.numberinpid = document.getElementById('numberinpid');
    this.phoneinputid = document.getElementById('phoneinputid');
  }
  inputshowing() {
    console.log('inputshowing');
    this.numberinpid.style.display = 'flex';
    this.phoneinputid.classList.add('phoneinputdivactive');
  }
  clearoverlay() {
    this.navbarcom.logoingremove();
  }
}
