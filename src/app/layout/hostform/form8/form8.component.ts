import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form8',
  templateUrl: './form8.component.html',
  styleUrls: ['./form8.component.scss']
})
export class Form8Component implements OnInit {
  typingindex: number = 0;
  error = false;
  constructor(private fb: FormBuilder) { }
  textareaform = this.fb.group({
    textareaformcontrol: ['', Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
    ]
  });
  get f() {
    return this.textareaform.controls;
  }
  ngOnInit(): void {
  }
  inputvalcheck(val: any) {
    this.typingindex = val.target.value.length;
    if (this.typingindex > 50) {
      this.error = true;
    } else {
      this.error = false;
    }
  }
}
