import { NavbarComponent } from 'src/app/layout/navbar/navbar.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hotaldetail',
  templateUrl: './hotaldetail.component.html',
  styleUrls: ['./hotaldetail.component.scss'],
})

export class HotaldetailComponent implements OnInit {
  @ViewChild(NavbarComponent) navbar: any;

  constructor() { }

  ngOnInit(): void {
  }

}
