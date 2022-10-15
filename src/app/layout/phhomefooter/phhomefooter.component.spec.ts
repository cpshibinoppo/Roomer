import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhhomefooterComponent } from './phhomefooter.component';

describe('PhhomefooterComponent', () => {
  let component: PhhomefooterComponent;
  let fixture: ComponentFixture<PhhomefooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhhomefooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhhomefooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
