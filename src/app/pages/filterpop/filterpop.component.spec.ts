import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterpopComponent } from './filterpop.component';

describe('FilterpopComponent', () => {
  let component: FilterpopComponent;
  let fixture: ComponentFixture<FilterpopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterpopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterpopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
