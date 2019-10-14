import { Component, OnInit } from '@angular/core';
import { ActionButtonService } from '../action-button.service';
import { UpdateItemButtonService } from './update-item-button.service';

@Component({
  selector: 'fei-update-item-button',
  templateUrl: './update-item-button.component.html',
  styleUrls: ['./update-item-button.component.scss'],
  // providers: [{ provide: ActionButtonService, useClass: UpdateItemButtonService }]
  // providers: [{ provide: ActionButtonService, useExisting: UpdateItemButtonService }]
  // providers: [{ provide: ActionButtonService, useFactory: UpdateItemButtonService }]
  providers: [{ provide: ActionButtonService, useValue: UpdateItemButtonService }]
})
export class UpdateItemButtonComponent implements OnInit {

  constructor(private service: UpdateItemButtonService) { }

  ngOnInit() {
  }

  set targetId(id: number | null) {
    this.service.targetId = id;
  }

  get targetId() {
    return this.service.targetId;
  }

}
