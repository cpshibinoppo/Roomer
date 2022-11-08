import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form11Component } from './form11.component';

describe('Form11Component', () => {
  let component: Form11Component;
  let fixture: ComponentFixture<Form11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Form11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Form11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
