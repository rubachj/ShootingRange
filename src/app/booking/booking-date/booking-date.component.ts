import { Component } from '@angular/core';
import { CalendarComponent } from '../../common/calendar/calendar.component';
import { CalendarOption } from '../../common/calendar/calendar.model';
import { HourPickerComponent } from '../../common/hour-picker/hour-picker.component';
import { HourPickerOptions } from '../../common/hour-picker/hour-picker.model';

@Component({
  selector: 'app-booking-date',
  imports: [CalendarComponent, HourPickerComponent],
  templateUrl: './booking-date.component.html',
  styleUrl: './booking-date.component.css',
  standalone: true
})
export class BookingDateComponent {
  calendarOption: CalendarOption = {
    usingDatesFromPast: false,
    usingOnlyAllowedDates: false,
    allowedDates: []
  }

  hourPickerOptions: HourPickerOptions = {
    hours: ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00"],
    allowedHours: ["12:00", "14:00"]
  }

  handleSelectedDate(date: Date): void {
    console.log(date);
  }

  handleSelectedHour(hour: string): void {
    console.log(hour);
  }

}
