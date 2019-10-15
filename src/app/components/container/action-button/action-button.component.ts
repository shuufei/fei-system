import { Component, OnInit } from '@angular/core';

import { ActionButtonService } from './action-button.service';

@Component({
  selector: 'fei-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent implements OnInit {

  constructor(private actionButtonService: ActionButtonService) { }

  ngOnInit() {
  }

  get label() {
    return this.actionButtonService.label;
  }

  get service() {
    return this.actionButtonService;
  }

  onClicked() {
    this.actionButtonService.action();
  }

}
