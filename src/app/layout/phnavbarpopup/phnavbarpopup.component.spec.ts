import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhnavbarpopupComponent } from './phnavbarpopup.component';

describe('PhnavbarpopupComponent', () => {
  let component: PhnavbarpopupComponent;
  let fixture: ComponentFixture<PhnavbarpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhnavbarpopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhnavbarpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
