import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistsComponent } from './wishlists.component';

describe('WishlistsComponent', () => {
  let component: WishlistsComponent;
  let fixture: ComponentFixture<WishlistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishlistsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishlistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
