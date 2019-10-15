import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActionButtonService } from '../action-button.service';
import { UpdateItemButtonService } from './update-item-button.service';
import { ActionButtonComponent } from '../action-button.component';

@Component({
  selector: 'fei-update-item-button',
  templateUrl: './update-item-button.component.html',
  styleUrls: ['./update-item-button.component.scss'],
  providers: [{ provide: ActionButtonService, useClass: UpdateItemButtonService }]
})
export class UpdateItemButtonComponent implements OnInit {
  @ViewChild(ActionButtonComponent, { static: true }) actionButton!: ActionButtonComponent;
  @Input('targetId')
  set targetId(value: number | null) {
    const service = this.actionButton.service as UpdateItemButtonService;
    service.targetId = value;
  }

  constructor() { }

  ngOnInit() {
  }

}
