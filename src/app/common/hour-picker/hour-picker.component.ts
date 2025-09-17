import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HourPickerOptions } from './hour-picker.model';

@Component({
  selector: 'app-hour-picker',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './hour-picker.component.html',
  styleUrl: './hour-picker.component.css'
})
export class HourPickerComponent {

  @Input()
  hourPickerOptions: HourPickerOptions = {
    hours: [],
    allowedHours: []
  }
  @Output()
  selectedHourEvent = new EventEmitter<string>();

  lastSelected: string = "";

  isDisabled(hour: string): boolean {
    return !this.hourPickerOptions.allowedHours
      .some(allowedHour => allowedHour === hour);
  }

  isSelected(hour: string): boolean {
    return this.lastSelected === hour;
  }

  selectHour(hour: string): void {
    this.lastSelected = hour;
    this.selectedHourEvent.emit(hour);
  }

}
