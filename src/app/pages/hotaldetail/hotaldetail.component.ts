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
    $('.showmorediv').click(function () {
      $('.main').css('opacity', '0');
      $('.showmorephotos').css('animation-name', 'showup');
      $('.showmorephotos').css('display', 'block');
      $('.footersectionmain ').css('padding', '0');
      setTimeout(function () {
        $('.main').css('display', 'none');
      }, 2000);
    });

  }
  showaddgust() {
    $(".addgust").toggleClass('show');
    $(".drowpdownicon").toggleClass('show');
  }
  buttonlink() {
    location.href = "/booking"
  }
  backfun() {
    $('.main').css('display' , 'flex');
    $('.showmorephotos').css('animation-name', 'showdown');
    setTimeout(function () {
      $('.showmorephotos').css('display', 'none');
      $('.footersectionmain ').css('padding', '1rem');
      $('.main').css('opacity', '1');
    }, 1000);
  }

}
