import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form8Component } from './form8.component';

describe('Form8Component', () => {
  let component: Form8Component;
  let fixture: ComponentFixture<Form8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Form8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Form8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
