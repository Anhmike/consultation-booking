import {Component, OnInit} from '@angular/core';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdButton} from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

@Component({
  moduleId: module.id,
  selector: 'consultation-home',
  templateUrl: 'consultation-home.component.html',
  styleUrls: ['consultation-home.component.css'],
  directives: [MD_SIDENAV_DIRECTIVES, MD_LIST_DIRECTIVES, MdToolbar, MdButton, MdIcon],
  providers: [MdIconRegistry]
})
export class ConsultationHomeComponent implements OnInit {
  views: Object[];

  constructor() {}

  ngOnInit() {
    this.views =
        [{name: "Home", icon: "home"}, {name: "Book a consultation", icon: "insert_invitation"}];
  }
}
