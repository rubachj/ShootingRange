import { Component } from '@angular/core';
import { RouterModule} from '@angular/router';
import { BookingNavComponent } from './booking-nav/booking-nav.component';

@Component({
  selector: 'app-booking',
  imports: [RouterModule, BookingNavComponent],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css',
  standalone: true
})
export class BookingComponent {

}
