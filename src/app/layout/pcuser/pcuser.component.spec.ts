import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcuserComponent } from './pcuser.component';

describe('PcuserComponent', () => {
  let component: PcuserComponent;
  let fixture: ComponentFixture<PcuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
