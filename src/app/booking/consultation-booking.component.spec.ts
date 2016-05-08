import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import {ComponentFixture, TestComponentBuilder} from '@angular/compiler/testing';
import {Component} from '@angular/core';
import {By} from '@angular/platform-browser';
import {ConsultationBookingComponent} from './consultation-booking.component';

describe('Component: ConsultationBooking', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [ConsultationBookingComponent]);
  beforeEach(
      inject([TestComponentBuilder], function(tcb: TestComponentBuilder) { builder = tcb; }));

  it('should inject the component',
     inject([ConsultationBookingComponent],
            (component: ConsultationBookingComponent) => { expect(component).toBeTruthy(); }));

  it('should create the component', inject([], () => {
       return builder.createAsync(ConsultationBookingComponentTestController)
           .then((fixture: ComponentFixture<any>) => {
             let query = fixture.debugElement.query(By.directive(ConsultationBookingComponent));
             expect(query).toBeTruthy();
             expect(query.componentInstance).toBeTruthy();
           });
     }));
});

@Component({
  selector: 'test',
  template: `
    <consultation-booking></consultation-booking>
  `,
  directives: [ConsultationBookingComponent]
})
class ConsultationBookingComponentTestController {
}
