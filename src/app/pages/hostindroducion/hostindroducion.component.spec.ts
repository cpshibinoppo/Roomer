import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostindroducionComponent } from './hostindroducion.component';

describe('HostindroducionComponent', () => {
  let component: HostindroducionComponent;
  let fixture: ComponentFixture<HostindroducionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostindroducionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostindroducionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
