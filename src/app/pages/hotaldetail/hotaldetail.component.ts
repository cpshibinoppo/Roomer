import { Component, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavbarComponent } from 'src/app/layout/navbar/navbar.component';
import { SwiperComponent } from "swiper/angular";

@Component({
  selector: 'app-hotaldetail',
  templateUrl: './hotaldetail.component.html',
  styleUrls: ['./hotaldetail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
@HostListener('window:resize', ['$event'])
export class HotaldetailComponent implements OnInit {
  @ViewChild(NavbarComponent) navbar: any;
  screenwidth:any
  container:any;

  constructor() { }

  ngOnInit(): void {
    this.screenwidth = window.innerWidth;
    if(this.screenwidth < 768){
      console.log('less than 789');
      this.container = '-fluid'
    }
    console.log(this.screenwidth);

  }

}
