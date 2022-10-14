import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotalcardlistComponent } from './hotalcardlist.component';

describe('HotalcardlistComponent', () => {
  let component: HotalcardlistComponent;
  let fixture: ComponentFixture<HotalcardlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotalcardlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotalcardlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
