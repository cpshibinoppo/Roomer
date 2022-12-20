import { Component, Injectable, OnInit } from '@angular/core';
import { NavbarComponent } from 'src/app/layout/navbar/navbar.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-logoinandsighup',
  templateUrl: './logoinandsighup.component.html',
  styleUrls: ['./logoinandsighup.component.scss'],
})
@Injectable({
  providedIn: 'root'
})
export class LogoinandsighupComponent implements OnInit {
  numberinpid: any;
  phoneinputid: any;
  loginphonenumber = false;
  submitted = false;
  constructor(public navbarcom: NavbarComponent, private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.numberinpid = document.getElementById('numberinpid');
    this.phoneinputid = document.getElementById('phoneinputid');
  }
  loginForm = this.fb.group({
    usernumber: new FormControl('', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')])
  });
  get f() {
    return this.loginForm.controls;
  }
  inputshowing() {
    this.numberinpid = document.getElementById('numberinpid');
    this.phoneinputid = document.getElementById('phoneinputid');
    this.numberinpid.style.display = 'flex';
    this.phoneinputid.classList.add('phoneinputdivactive');
  }
  clearoverlay() {
    this.navbarcom.logoingremove();
  }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    // alert(this.loginForm.value);
    return this.http.post('http://localhost:8000/api/login', this.loginForm.value).subscribe({
      next: (response) => this.loginphonenumber = true,
      // next: (response) => console.log(response),
      error: (response) => console.log(response)
    });
  }
  // otpback(){
  //   this.loginphonenumber = false;
  // }
}
