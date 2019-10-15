import { Component, OnInit, ViewChild, ViewChildren, QueryList, AfterViewInit } from '@angular/core';

import { UpdateItemButtonComponent } from 'src/app/components/container/action-button/update-item-button/update-item-button.component';
import { UpdateItemButtonService } from '../../components/container/action-button/update-item-button/update-item-button.service';
import { ActionButtonService } from '../../components/container/action-button/action-button.service';

@Component({
  selector: 'fei-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChildren(UpdateItemButtonComponent) updateItemButtons!: QueryList<UpdateItemButtonComponent>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.updateItemButtons.toArray().forEach((button, i) => {
      console.log(`--- target${i}: ${button.service.uuid}`);
      button.service.targetId = i;
    });
  }

}
