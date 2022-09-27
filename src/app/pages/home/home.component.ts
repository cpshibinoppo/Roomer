import { Component, OnInit, ViewChild } from '@angular/core';
import { NavbarComponent } from 'src/app/layout/navbar/navbar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  @ViewChild(NavbarComponent) child: any;
  constructor() { }
  d:any
  ngOnInit(): void {
    // let navbar = new NavbarComponent();
    // this.d = document.getElementById
  }
  off(){
    document.getElementById("overlay")!.classList.add('overlay')
    //
  }
  hoff(){
    document.getElementById("overlay")!.classList.remove('overlay')
    this.child.restfun();
  }
}
