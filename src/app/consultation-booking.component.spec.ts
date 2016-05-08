import {beforeEachProviders, describe, expect, it, inject} from '@angular/core/testing';
import {ConsultationBookingComponent} from '../app/consultation-booking.component';

beforeEachProviders(() => [ConsultationBookingComponent]);

describe('App: ConsultationBooking', () => {
  it('should create the app',
     inject([ConsultationBookingComponent],
            (app: ConsultationBookingComponent) => { expect(app).toBeTruthy(); }));

  it('should have as title \'consultation-booking works!\'',
     inject([ConsultationBookingComponent], (app: ConsultationBookingComponent) => {
       expect(app.title).toEqual('consultation-booking works!');
     }));
});
