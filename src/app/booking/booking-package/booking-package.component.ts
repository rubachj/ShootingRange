import { Component } from '@angular/core';
import { BookingPackageCardComponent } from '../booking-package-card/booking-package-card.component';

@Component({
  selector: 'app-booking-package',
  imports: [BookingPackageCardComponent],
  templateUrl: './booking-package.component.html',
  styleUrl: './booking-package.component.css',
  standalone: true
})
export class BookingPackageComponent {

}
