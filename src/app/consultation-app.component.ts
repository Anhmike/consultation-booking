import {Component, OnInit} from '@angular/core';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from '@angular/router-deprecated';

import {MdToolbar} from '@angular2-material/toolbar';
import {MdButton} from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

import {ConsultationHomeComponent} from './home/consultation-home.component';
import {ConsultationBookingComponent} from './booking/consultation-booking.component';

@Component({
  moduleId: module.id,
  selector: 'consultation-app',
  templateUrl: 'consultation-app.component.html',
  styleUrls: ['consultation-app.component.css'],
  directives:
      [MD_SIDENAV_DIRECTIVES, MD_LIST_DIRECTIVES, MdToolbar, MdButton, MdIcon, ROUTER_DIRECTIVES],
  providers: [MdIconRegistry, ROUTER_PROVIDERS]
})
@RouteConfig([
  {path: '/', name: 'Home', component: ConsultationHomeComponent, useAsDefault: true},
  {path: '/booking', name: 'Booking', component: ConsultationBookingComponent}
])
export class ConsultationAppComponent implements OnInit {
  title = 'consultation-app works!';
  views: Object[];

  constructor() {}

  ngOnInit() {
    this.views = [
      {name: "Home", icon: "home", link: ['Home']},
      {name: "Book a consultation", icon: "insert_invitation", link: ['Booking']}
    ];
  }
}
