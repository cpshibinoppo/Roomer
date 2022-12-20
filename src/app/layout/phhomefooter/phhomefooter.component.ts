import { Component, OnInit } from '@angular/core';
import { LoginsharedService } from 'src/app/shared/loginshared.service';
@Component({
  selector: 'app-phhomefooter',
  templateUrl: './phhomefooter.component.html',
  styleUrls: ['./phhomefooter.component.scss'],
})
export class PhhomefooterComponent implements OnInit {
  constructor(private loginsharedService: LoginsharedService) { }
  public wishlists = "/wishlists";
  public home = '/home';
  public user = "/user";



  ngOnInit(): void {

  }
  showsighin() {
    this.loginsharedService.sendClickEvent();
  }

}
