import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourPickerComponent } from './hour-picker.component';

describe('HourPickerComponent', () => {
  let component: HourPickerComponent;
  let fixture: ComponentFixture<HourPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HourPickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HourPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
