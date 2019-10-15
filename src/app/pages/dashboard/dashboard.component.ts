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
  // @ViewChild('updateBtn1', { static: true, read: UpdateItemButtonComponent })
  // @ViewChild('updateBtn1', { static: true })
  // @ViewChild(UpdateItemButtonComponent, { static: true })
  // private updateItemButton1!: UpdateItemButtonComponent;

  // @ViewChild('updateBtn2', { static: true, read: UpdateItemButtonComponent })
  // @ViewChild('updateBtn2', { static: true })
  // @ViewChild(UpdateItemButtonComponent, { static: true })
  // private updateItemButton2!: UpdateItemButtonComponent;

  // @ViewChildren('updateBtn') updateItemButtons!: QueryList<UpdateItemButtonComponent>;


  constructor() { }

  ngOnInit() {
    // this.updateItemButton1.targetId = 1;
    // console.log('--- target1: ', this.updateItemButton1.targetId);
    // console.log('--- target2: ', this.updateItemButton2.targetId);
    // console.log('--- target1: ', this.updateItemButton1.injectedService.uuid);
    // console.log('--- target2: ', this.updateItemButton2.injectedService.uuid);
  }

  ngAfterViewInit(): void {
    // this.updateItemButtons.toArray().forEach((button, i) => {
    //   console.log(`--- target${i}: ${button.injectedService.uuid}`);
    // });
  }

}
