import {beforeEachProviders, describe, expect, it, inject} from '@angular/core/testing';
import {ConsultationAppComponent} from './consultation-app.component';

beforeEachProviders(() => [ConsultationAppComponent]);

describe('App: ConsultationApp', () => {
  it('should create the app',
     inject([ConsultationAppComponent],
            (app: ConsultationAppComponent) => { expect(app).toBeTruthy(); }));

  it('should have as title \'consultation-booking works!\'',
     inject([ConsultationAppComponent], (app: ConsultationAppComponent) => {
       expect(app.title).toEqual('consultation-app works!');
     }));
});
