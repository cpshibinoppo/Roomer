import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoinandsighupComponent } from './logoinandsighup.component';

describe('LogoinandsighupComponent', () => {
  let component: LogoinandsighupComponent;
  let fixture: ComponentFixture<LogoinandsighupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoinandsighupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoinandsighupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
