import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReiewscardComponent } from './reiewscard.component';

describe('ReiewscardComponent', () => {
  let component: ReiewscardComponent;
  let fixture: ComponentFixture<ReiewscardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReiewscardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReiewscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
