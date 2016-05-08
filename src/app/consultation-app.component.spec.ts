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
import {ConsultationAppComponent} from './consultation-app.component';

describe('Component: ConsultationApp', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [ConsultationAppComponent]);
  beforeEach(
      inject([TestComponentBuilder], function(tcb: TestComponentBuilder) { builder = tcb; }));

  it('should inject the component',
     inject([ConsultationAppComponent],
            (component: ConsultationAppComponent) => { expect(component).toBeTruthy(); }));

  it('should create the component', inject([], () => {
       return builder.createAsync(ConsultationAppComponentTestController)
           .then((fixture: ComponentFixture<any>) => {
             let query = fixture.debugElement.query(By.directive(ConsultationAppComponent));
             expect(query).toBeTruthy();
             expect(query.componentInstance).toBeTruthy();
           });
     }));
});

@Component({
  selector: 'test',
  template: `
    <app-consultation-app></app-consultation-app>
  `,
  directives: [ConsultationAppComponent]
})
class ConsultationAppComponentTestController {
}
