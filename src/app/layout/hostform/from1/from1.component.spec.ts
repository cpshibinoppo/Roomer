import { ComponentFixture, TestBed } from '@angular/core/testing';

import { From1Component } from './from1.component';

describe('From1Component', () => {
  let component: From1Component;
  let fixture: ComponentFixture<From1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ From1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(From1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
