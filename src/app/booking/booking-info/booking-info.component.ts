import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking-info',
  imports: [ReactiveFormsModule],
  templateUrl: './booking-info.component.html',
  styleUrl: './booking-info.component.css',
  standalone: true
})
export class BookingInfoComponent {
  bookingInfoForm = new FormGroup({
    name: new FormControl<string>(''),
    surname: new FormControl<string>(''),
    email: new FormControl<string>(''),
    phoneNumber: new FormControl<string>(''),
    additionalInfo: new FormControl<string>('')
  })

  submit(): void {
    console.log(this.bookingInfoForm.value);
  }

  clearForm(): void {
    this.bookingInfoForm.reset();
  }

  isValid(): boolean {
    return true;
  }

  isDirty(): boolean {
    return !this.bookingInfoForm.dirty;
  }
}
