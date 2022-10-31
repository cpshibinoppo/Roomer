import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/shared/form.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss']
})
export class HostComponent implements OnInit {

  constructor(public formser:FormService) { }
  clickEventsubscription:Subscription | undefined;

  buttonchang = false;
  ngOnInit(): void {
    // if(this.from1com.nextbutton){
    //   console.log('sc');
    // }
    this.clickEventsubscription=this.formser.getClickEvent().subscribe(()=>{
      this.buttontruecheck();
      })
  }
buttontruecheck(){
  this.buttonchang = true;
  // if(this.from1com.nextbutton){
    //   console.log('sc');
    // }
}
}
