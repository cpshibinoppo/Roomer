import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { HomeComponent } from 'src/app/pages/home/home.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @ViewChild('search') search: ElementRef<HTMLInputElement> | undefined;
  staysid: any;
  experienceid: any;
  where: any;
  checkin: any;
  checkout: any;
  mapmaindiv: any;
  who: any;
  dateid: any;
  searchiconshow = false;
  menuBtnClick = false;
  subusershow = false;
  mapshow = false;
  guestshow = false;
  guests = {
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  };
  clearicon = false;
  autofocus: any;
  searchvalue: any;
  searhinptid: any;
  calendarshow = false;
  checkinandout: any;
  experienceshowid: any;
  navbarloiginsection: any;
  subnavbar:any;
  navsection:any;
  constructor(public homecom: HomeComponent, private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (this.menuBtnClick == false) {
        var aciveclass = document.querySelector('.active');
        this.mapmaindiv.style.background = 'var(--white)';
        aciveclass?.classList.remove('active');
        this.searchiconshow = false;
        this.subusershow = false;
        this.mapshow = false;
        this.guestshow = false;
        this.clearicon = false;
        this.calendarshow = false;
      } else {
        this.menuBtnClick = false;
      }
    });
  }

  ngOnInit(): void {
    this.staysid = document.getElementById('staysid');
    this.experienceid = document.getElementById('experienceid');
    this.autofocus = document.getElementById('autofocus');
    this.mapmaindiv = document.getElementById('mapmaindiv');
    this.where = document.getElementById('wherediv');
    this.checkin = document.getElementById('checkindiv');
    this.checkout = document.getElementById('checkoutdiv');
    this.who = document.getElementById('whodiv');
    this.searhinptid = document.getElementById('searhinptid');
    this.dateid = document.getElementById('datediv');
    this.checkinandout = document.getElementById('checkinout');
    this.experienceshowid = document.getElementById('experienceshowid');
    this.navbarloiginsection = document.getElementById('navbarloiginsection');
    this.subnavbar = document.getElementById('subnavbarsection');
    this.navsection = document.getElementById('navsection');
  }
  showsubnavbar(check: any) {
    this.menuBtnClick = true;
    var aciveclass = document.querySelector('.active');
    const sub = document.getElementById('subnav');
    const navbar = document.getElementById('navbar');
    const test = document.getElementById('test');
    this.mapmaindiv.style.background = 'var(--icon-bacground)';
    this.subnavbar.style.opacity = 0;
    this.navsection.style.boxShadow = 'none';
    this.homecom.off();
    navbar!.style.display = 'none';
    sub!.style.display = 'block';
    test!.style.display = 'block ';
    if (innerWidth < 980) {
      this.searchiconshow = false;
    } else {
      this.searchiconshow = true;
    }
    if (check == 'where') {
      this.where?.classList.add('active');
      this.mapshow = true;
      this.search!.nativeElement.focus();
      aciveclass?.classList.remove('active');
    } else if (check == 'week') {
      aciveclass?.classList.remove('active');
      this.checkin?.classList.add('active');
      this.calendarshow = true;
    } else if (check == 'who') {
      aciveclass?.classList.remove('active');
      this.guestshow = true;
      this.who?.classList.add('active');
    }
  }

  activefun(check: any) {
    this.menuBtnClick = true;
    var aciveclass = document.querySelector('.active');
    this.mapmaindiv.style.background = 'var(--icon-bacground)';
    if (check == 'where') {
      this.where?.classList.add('active');
      this.mapshow = true;
      this.search!.nativeElement.focus();
      this.guestshow = false;
      aciveclass?.classList.remove('active');
      this.calendarshow = false;

      if (this.searhinptid.value == '') {
        this.clearicon = false;
      } else {
        this.clearicon = true;
      }
    } else if (check == 'checkin') {
      if (this.checkin?.classList.contains('active')) {
        aciveclass?.classList.remove('active');
      } else {
        aciveclass?.classList.remove('active');
        this.mapshow = false;
        this.guestshow = false;
        this.calendarshow = true;
        this.checkin?.classList.add('active');
        this.clearicon = false;
      }
    } else if (check == 'date') {
      this.menuBtnClick = true;

      if (this.dateid?.classList.contains('active')) {
        aciveclass?.classList.remove('active');
      } else {
        console.log('showsubnavba if');
        aciveclass?.classList.remove('active');
        this.mapshow = false;
        this.guestshow = false;
        this.calendarshow = true;
        this.dateid?.classList.add('active');
        this.clearicon = false;
      }
    } else if (check == 'checkout') {
      this.menuBtnClick = true;

      if (this.checkout?.classList.contains('active')) {
        aciveclass?.classList.remove('active');
      } else {
        aciveclass?.classList.remove('active');
        this.mapshow = false;
        this.guestshow = false;
        this.calendarshow = true;
        this.checkout?.classList.add('active');
        this.clearicon = false;
      }
    } else if (check == 'who') {
      if (this.who?.classList.contains('active')) {
        aciveclass?.classList.remove('active');
      } else {
        aciveclass?.classList.remove('active');
        this.mapshow = false;
        this.guestshow = true;
        this.who?.classList.add('active');
        this.clearicon = false;
        this.calendarshow = false;
      }
    } else {
      console.log('showsubnavba else');
    }
  }
  restfun() {
    this.menuBtnClick = true;
    const sub = document.getElementById('subnav');
    const navbar = document.getElementById('navbar');
    const test = document.getElementById('test');
    navbar!.style.display = 'block';
    sub!.style.display = 'none';
    test!.style.display = 'none ';
    this.subnavbar.style.opacity = 1;
    this.navsection.style.boxShadow = 'rgb(0 0 0 / 16%) 0px 1px 4px';
  }
  showsubuser() {
    this.menuBtnClick = true;
    this.subusershow = true;
    var aciveclass = document.querySelector('.active');
    this.mapmaindiv.style.background = 'var(--white)';
    aciveclass?.classList.remove('active');
    this.searchiconshow = false;
  }
  addadults() {
    if (this.guests.adults == 0) {
      this.guests.adults = 1;
    }
  }
  calendhaedbtnactive(check: any) {
    var first = document.getElementById('first');
    var last = document.getElementById('last');
    var aciveclass = document.querySelector('.headbtnacive');
    if (check == 'first') {
      first!.classList.add('headbtnacive');
      aciveclass?.classList.remove('headbtnacive');
    } else if (check == 'last') {
      last!.classList.add('headbtnacive');
      aciveclass?.classList.remove('headbtnacive');
    }
  }
  cleariconshow(check: any) {
    this.searchvalue = check;
    if (check == '') {
      this.clearicon = false;
    } else {
      this.clearicon = true;
    }
  }
  clearinputdate() {
    console.log(this.searhinptid.value);
    this.searhinptid.value = '';
  }
  experienceshow(check: any) {
    var aciveclass = document.querySelector('.subactivebtn');
    if (check == 'stays') {
      this.checkinandout.style.display = 'contents';
      this.experienceshowid.style.display = 'none';
      this.staysid.classList.add('subactivebtn');
      aciveclass?.classList.remove('subactivebtn');
    } else {
      this.checkinandout.style.display = 'none';
      this.experienceshowid.style.display = 'block';
      this.experienceid.classList.add('subactivebtn');
      aciveclass?.classList.remove('subactivebtn');
    }
  }
  logoingshow() {
    this.navbarloiginsection.style.display = 'block';
    this.homecom.loginandsighshowfn();
  }
  logoingremove() {
    this.navbarloiginsection.style.display = 'none';
    this.homecom.loginandsighshowfn();
  }
  showfliter(){
    this.homecom.showfilterpopupfun();
  }
  showphnavbar(){
    document.getElementById('phnavbarpopupsection')!.style.display = 'block';
  }
  hidephnavbar(){
    document.getElementById('phnavbarpopupsection')!.style.display = 'none';
  }
}
