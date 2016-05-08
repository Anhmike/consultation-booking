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
import {ConsultationHomeComponent} from './consultation-home.component';

describe('Component: ConsultationHome', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [ConsultationHomeComponent]);
  beforeEach(
      inject([TestComponentBuilder], function(tcb: TestComponentBuilder) { builder = tcb; }));

  it('should inject the component',
     inject([ConsultationHomeComponent],
            (component: ConsultationHomeComponent) => { expect(component).toBeTruthy(); }));

  it('should create the component', inject([], () => {
       return builder.createAsync(ConsultationHomeComponentTestController)
           .then((fixture: ComponentFixture<any>) => {
             let query = fixture.debugElement.query(By.directive(ConsultationHomeComponent));
             expect(query).toBeTruthy();
             expect(query.componentInstance).toBeTruthy();
           });
     }));
});

@Component({
  selector: 'test',
  template: `
    <consultation-home></consultation-home>
  `,
  directives: [ConsultationHomeComponent]
})
class ConsultationHomeComponentTestController {
}
