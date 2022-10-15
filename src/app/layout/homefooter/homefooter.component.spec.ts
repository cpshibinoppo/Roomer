import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomefooterComponent } from './homefooter.component';

describe('HomefooterComponent', () => {
  let component: HomefooterComponent;
  let fixture: ComponentFixture<HomefooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomefooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomefooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
