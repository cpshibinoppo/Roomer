import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form6Component } from './form6.component';

describe('Form6Component', () => {
  let component: Form6Component;
  let fixture: ComponentFixture<Form6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Form6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Form6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
