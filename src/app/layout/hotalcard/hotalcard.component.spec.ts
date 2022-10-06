import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotalcardComponent } from './hotalcard.component';

describe('HotalcardComponent', () => {
  let component: HotalcardComponent;
  let fixture: ComponentFixture<HotalcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotalcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotalcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
