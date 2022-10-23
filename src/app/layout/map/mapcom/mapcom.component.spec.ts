import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapcomComponent } from './mapcom.component';

describe('MapcomComponent', () => {
  let component: MapcomComponent;
  let fixture: ComponentFixture<MapcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapcomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
