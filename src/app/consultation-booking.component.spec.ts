import {beforeEachProviders, describe, expect, it, inject} from '@angular/core/testing';
import {ConsultationBookingAppComponent} from '../app/consultation-booking.component';

beforeEachProviders(() => [ConsultationBookingAppComponent]);

describe('App: ConsultationBooking', () => {
  it('should create the app',
     inject([ConsultationBookingAppComponent],
            (app: ConsultationBookingAppComponent) => { expect(app).toBeTruthy(); }));

  it('should have as title \'consultation-booking works!\'',
     inject([ConsultationBookingAppComponent], (app: ConsultationBookingAppComponent) => {
       expect(app.title).toEqual('consultation-booking works!');
     }));
});
