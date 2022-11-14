import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneuserComponent } from './phoneuser.component';

describe('PhoneuserComponent', () => {
  let component: PhoneuserComponent;
  let fixture: ComponentFixture<PhoneuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
