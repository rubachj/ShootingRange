import { Routes } from '@angular/router';
import path from 'node:path';
import { BookingComponent } from './booking/booking.component';
import { BookingPackageComponent } from './booking/booking-package/booking-package.component';
import { BookingDateComponent } from './booking/booking-date/booking-date.component';
import { BookingInfoComponent } from './booking/booking-info/booking-info.component';
import { BookingSummaryComponent } from './booking/booking-summary/booking-summary.component';

export const routes: Routes = [
    {
        path: 'booking', component: BookingComponent,
        children: [
            { path: 'package', component: BookingPackageComponent},
            { path: 'date', component: BookingDateComponent},
            { path: 'info', component: BookingInfoComponent},
            { path: 'summary', component: BookingSummaryComponent}
        ]
    },
    { path: '', redirectTo: '/booking', pathMatch: 'full' }
];
