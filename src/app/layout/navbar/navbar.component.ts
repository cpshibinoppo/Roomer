import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  showsubnavbar() {
    const sub = document.getElementById('subnav');
    const navbar = document.getElementById('navbar');
    navbar!.style.display = 'none';
    sub!.style.display = 'block';
  }
}
