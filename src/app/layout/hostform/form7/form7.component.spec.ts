import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form7Component } from './form7.component';

describe('Form7Component', () => {
  let component: Form7Component;
  let fixture: ComponentFixture<Form7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Form7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Form7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
