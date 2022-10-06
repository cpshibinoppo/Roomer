import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotallistComponent } from './hotallist.component';

describe('HotallistComponent', () => {
  let component: HotallistComponent;
  let fixture: ComponentFixture<HotallistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotallistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotallistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
