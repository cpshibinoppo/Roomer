import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotaldetailComponent } from './hotaldetail.component';

describe('HotaldetailComponent', () => {
  let component: HotaldetailComponent;
  let fixture: ComponentFixture<HotaldetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotaldetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotaldetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
