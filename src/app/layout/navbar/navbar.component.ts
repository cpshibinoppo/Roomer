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
  where: any;
  checkin: any;
  checkout: any;
  mapmaindiv: any;
  who:any;
  constructor() {}

  ngOnInit(): void {
    this.mapmaindiv = document.getElementById('mapmaindiv');
    this.where = document.getElementById('wherediv');
    this.checkin = document.getElementById('checkindiv');
    this.checkout = document.getElementById('checkoutdiv');
    this.who = document.getElementById('whodiv');
  }
  showsubnavbar() {
    const sub = document.getElementById('subnav');
    const navbar = document.getElementById('navbar');
    const test = document.getElementById('test');

    navbar!.style.display = 'none';
    sub!.style.display = 'block';
    test!.style.display = 'block ';
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

  activefun(check: any) {
    var aciveclass = document.querySelector('.active');
    this.mapmaindiv.style.background = 'var(--icon-bacground)';
    if (innerWidth < 980) {
      this.searchiconshow = false;
    } else {
      this.searchiconshow = true;
    }
    if (check == 'where') {
      this.where?.classList.add('active');
      aciveclass?.classList.remove('active');
    } else if (check == 'checkin') {
      if(this.checkin?.classList.contains('active')){
        aciveclass?.classList.remove('active');
      }else{
      aciveclass?.classList.remove('active');
      this.checkin?.classList.add('active');
      }

    } else if (check == 'checkout') {
      if(this.checkout?.classList.contains('active')){
        aciveclass?.classList.remove('active');
      }else{
      aciveclass?.classList.remove('active');
      this.checkout?.classList.add('active');
      }
    } else if(check == 'who'){
      if(this.who?.classList.contains('active')){
        aciveclass?.classList.remove('active');
      }else{
      aciveclass?.classList.remove('active');
      this.who?.classList.add('active');
      }
    }
  }
  removeactivefu(){
    console.log('checktootle');
    this.searchiconshow = false
    var aciveclass = document.querySelector('.active');
    aciveclass?.classList.remove('active');
  }
}
