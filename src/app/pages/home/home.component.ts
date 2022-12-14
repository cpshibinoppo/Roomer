import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { NavbarComponent } from 'src/app/layout/navbar/navbar.component';
import AOS from "aos";
AOS.init();
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
@Injectable({ providedIn: 'any' })
export class HomeComponent implements OnInit {
  @ViewChild(NavbarComponent) navbar: any;
  constructor() { }

  overlayid: any;
  ngOnInit(): void {
    // let navbar = new NavbarComponent();
    // this.d = document.getElementById
    this.overlayid = document.getElementById('overlayid');
  }
  off() {
    // document.getElementById('overlay')!.classList.add('overlay');
    //
  }
  hoff() {
    // document.getElementById('overlay')!.classList.remove('overlay');
    this.navbar.restfun();
  }
  loginandsighshowfn() {
    if (this.overlayid.classList.contains('overlaylogin')) {
      this.overlayid.classList.remove('overlaylogin');
    } else {
      this.overlayid.classList.add('overlaylogin');
    }
  }
  showfilterpopupfun() {
    document.getElementById('filterpopupfun')!.style.display = 'block';
  }
  hidefilterpopupfun() {
    document.getElementById('filterpopupfun')!.style.display = 'none';
  }
}
