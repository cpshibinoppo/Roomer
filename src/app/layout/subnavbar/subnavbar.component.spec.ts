import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubnavbarComponent } from './subnavbar.component';

describe('SubnavbarComponent', () => {
  let component: SubnavbarComponent;
  let fixture: ComponentFixture<SubnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubnavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
