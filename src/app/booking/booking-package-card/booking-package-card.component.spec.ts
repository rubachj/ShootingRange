import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingPackageCardComponent } from './booking-package-card.component';

describe('BookingPackageCardComponent', () => {
  let component: BookingPackageCardComponent;
  let fixture: ComponentFixture<BookingPackageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingPackageCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingPackageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
