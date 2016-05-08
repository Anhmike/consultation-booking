import {Component, OnInit} from '@angular/core';

import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {MdButton} from '@angular2-material/button';
import {MdCard} from '@angular2-material/card';

@Component({
  moduleId: module.id,
  selector: 'consultation-home',
  templateUrl: 'consultation-home.component.html',
  styleUrls: ['consultation-home.component.css'],
  directives: [MdButton, MdCard, ROUTER_DIRECTIVES]
})
export class ConsultationHomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
