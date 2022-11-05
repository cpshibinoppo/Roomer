import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form9Component } from './form9.component';

describe('Form9Component', () => {
  let component: Form9Component;
  let fixture: ComponentFixture<Form9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Form9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Form9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
