import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CalendarDate, CalendarOption } from './calendar.model';

@Component({
  selector: 'app-calendar',
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent implements OnChanges {

  @Input()
  calendarOption: CalendarOption = {
    usingDatesFromPast: false,
    usingOnlyAllowedDates: false,
    allowedDates: []
  }

  @Output()
  selectedDateEvent = new EventEmitter<Date>();

  currentDate: Date = new Date();
  month: string = "";
  year: number = 2025;
  dates: CalendarDate[] = [];
  lastSelectedCalendarDate?: CalendarDate;

  ngOnChanges(): void {
    this.updateCalendar();
  }

  setNextMonth(): void {
    const { currentDate } = this;
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
    const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;

    this.currentDate.setMonth(nextMonth);
    this.currentDate.setFullYear(nextYear);

    this.updateCalendar();
  }

  setPreviousMonth(): void {
    const { currentDate } = this;
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const previousYear = currentMonth === 0 ? currentYear - 1 : currentYear;

    this.currentDate.setMonth(previousMonth);
    this.currentDate.setFullYear(previousYear);

    this.updateCalendar();
  }

  selectDate(calendarDate: CalendarDate): void {
    this.lastSelectedCalendarDate = calendarDate;
    this.selectedDateEvent.emit(calendarDate.date);
    this.dates.forEach(s => s.selected = false);
    calendarDate.selected = true;

    const currentMonth = this.currentDate.getMonth();
    const selectedMonth = calendarDate.date.getMonth();
    if (selectedMonth !== currentMonth) {
      this.switchMonth(currentMonth, selectedMonth);
    }
  }

  switchMonth(currentMonth: number, selectedMonth: number) {
    if (selectedMonth > currentMonth || (selectedMonth == 0 && currentMonth == 11)) {
      this.setNextMonth();
    } else if (selectedMonth < currentMonth || (selectedMonth == 11 && currentMonth == 0)) {
      this.setPreviousMonth();
    }
  }

  updateCalendar(): void {
    const { currentDate } = this;
    const firstDayInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDayInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    const offsetToLastMondayInPreviousMonth = (firstDayInMonth.getDay() + 6) % 7;
    const offsetToFirstMondeyInNextMonth = (8 - lastDayInMonth.getDay()) % 7 || 7;
    const date = new Date(firstDayInMonth.getFullYear(), firstDayInMonth.getMonth(), firstDayInMonth.getDate() - offsetToLastMondayInPreviousMonth);
    const lastDate = new Date(lastDayInMonth.getFullYear(), lastDayInMonth.getMonth(), lastDayInMonth.getDate() + offsetToFirstMondeyInNextMonth);
    this.dates = [];

    while (date.getTime() !== lastDate.getTime()) {
      const disabled = this.isDisabledDate(date);
      const selected = this.lastSelectedCalendarDate ? this.isSameDate(date, this.lastSelectedCalendarDate.date) : false;
      this.dates.push({
        date: new Date(date),
        disabled: disabled,
        selected: selected
      });
      date.setDate(date.getDate() + 1);
    }
    this.month = this.getMonthCurrentDate();
    this.year = currentDate.getFullYear();
  }

  isDisabledDate(date: Date): boolean {
    const { usingDatesFromPast, usingOnlyAllowedDates } = this.calendarOption;
    if (usingOnlyAllowedDates) {
      return !this.isDataAllowed(date);
    } else if (usingDatesFromPast) {
      return false;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const targetDate = new Date(date);
    targetDate.setHours(0, 0, 0, 0);

    return targetDate < today;
  }


  isDataAllowed(date: Date): boolean {
    const { allowedDates } = this.calendarOption;
    return allowedDates.some(d => this.isSameDate(d, date));
  }

  isSameDate(firstDate: Date, secondDate: Date) {
    const copyFirstDate = new Date(firstDate);
    const copySecondDate = new Date(secondDate);
    copyFirstDate.setHours(0, 0, 0, 0);
    copySecondDate.setHours(0, 0, 0, 0)
    return copyFirstDate.getTime() === copySecondDate.getTime();
  }

  getMonthCurrentDate(): string {
    switch (this.currentDate.getMonth()) {
      case 0:
        return "Styczeń";
      case 1:
        return "Luty";
      case 2:
        return "Marzec";
      case 3:
        return "Kwiecień";
      case 4:
        return "Maj";
      case 5:
        return "Czerwiec";
      case 6:
        return "Lipiec";
      case 7:
        return "Sierpień";
      case 8:
        return "Wrzesień";
      case 9:
        return "Październik";
      case 10:
        return "Listopad";
      case 11:
        return "Grudzień";
      default:
        return "";
    }
  }

}
