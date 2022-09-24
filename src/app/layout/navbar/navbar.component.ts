import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  line1: any;
  line2: any;
  line3: any;
  where:any
  checkin:any;
  mapmaindiv:any
  constructor() {}

  ngOnInit(): void {
    this.mapmaindiv = document.getElementById('mapmaindiv')
    this.where = document.getElementById('wherediv')
    this.checkin = document.getElementById('checkindiv');
  }
  showsubnavbar() {
    const sub = document.getElementById('subnav');
    const navbar = document.getElementById('navbar');
    const test = document.getElementById('test');

    navbar!.style.display = 'none';
    sub!.style.display = 'block';
    test!.style.display = 'block';
  }
  over(n: any) {
    this.line1 = document.getElementById('line1');
    this.line2 = document.getElementById('line2');
    this.line3 = document.getElementById('line3');
    if (n == 2) {
      this.line1!.style.display = 'none';
    } else if (n == 3) {
      this.line2!.style.display = 'none';
    } else if (n == 4) {
      this.line3!.style.display = 'none';
    }
  }
  out(n: any) {
    this.line1!.style.display = 'block';
    this.line2!.style.display = 'block';
    this.line3!.style.display = 'block';
  }
  searchiconshow = false;

  activefun(check:any) {
    console.log(this.where);

    this.mapmaindiv.style.background = 'var(--icon-bacground)'
    if(check == 'where'){
      this.where?.classList.add('active');
      // this.checkin?.classList.remove('active');
      // this.line1!.style.display = 'none !important';
      if (innerWidth < 980) {
        this.searchiconshow = false;
      } else {
        this.searchiconshow = true;
      }
    }
    else if(check == 'checkin'){
    this.where?.classList.remove('active');
    this.checkin?.classList.add('active');
    }
  }
}
