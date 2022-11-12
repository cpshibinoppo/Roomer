import { Component, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavbarComponent } from 'src/app/layout/navbar/navbar.component';
import $ from 'jquery';

@Component({
  selector: 'app-hotaldetail',
  templateUrl: './hotaldetail.component.html',
  styleUrls: ['./hotaldetail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
@HostListener('window:resize', ['$event'])
export class HotaldetailComponent implements OnInit {
  @ViewChild(NavbarComponent) navbar: any;
  screenwidth: any
  container: any;
  guestshow = false;
  guests = {
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  };

  constructor() { }

  ngOnInit(): void {
    this.screenwidth = window.innerWidth;
    if (this.screenwidth < 768) {
      this.container = '-fluid'
    }
  }
  showaddgust() {
    $(".addgust").toggleClass('show');
    $(".drowpdownicon").toggleClass('show');
  }
  buttonlink() {
    location.href = "/booking"
  }

}
