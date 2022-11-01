import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/shared/form.service';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';
import $ from 'jquery';
@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss']
})
export class HostComponent implements OnInit {
  buttoncheck = true;
  constructor(public formser: FormService, private loc: Location) { }
  clickEventsubscription: Subscription | undefined;

  ngOnInit(): void {
    this.clickEventsubscription = this.formser.getClickEvent().subscribe(() => {
      this.buttontruecheck();
    })
  }
  buttontruecheck() {
    this.buttoncheck = false;
    $(".nextbuttonmaindiv button").addClass("buttonactive")
  }
  buttonclick() {
    this.buttoncheck = true;
    $(".nextbuttonmaindiv button").removeClass("buttonactive")
    $('.form2maindiv').css('display', 'block');
    $('.form1maindiv').css('display', 'none');
    $('.questiondiv h1').text('Which of these best describes your place?')
  }
  backbuttonclick() {
    this.loc.back();
  }
}
