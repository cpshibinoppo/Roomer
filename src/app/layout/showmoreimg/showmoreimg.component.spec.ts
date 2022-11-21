import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowmoreimgComponent } from './showmoreimg.component';

describe('ShowmoreimgComponent', () => {
  let component: ShowmoreimgComponent;
  let fixture: ComponentFixture<ShowmoreimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowmoreimgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowmoreimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
