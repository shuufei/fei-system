import { Component, OnInit, ViewChild } from '@angular/core';
import { UpdateItemButtonService } from 'src/app/components/container/action-button/update-item-button/update-item-button.service';
import { UpdateItemButtonComponent } from 'src/app/components/container/action-button/update-item-button/update-item-button.component';

@Component({
  selector: 'fei-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('updateBtn1', { static: true, read: UpdateItemButtonComponent })
  private updateItemButton1!: UpdateItemButtonComponent;

  @ViewChild('updateBtn2', { static: true, read: UpdateItemButtonComponent })
  private updateItemButton2!: UpdateItemButtonComponent;

  constructor(private updateItemButtonService: UpdateItemButtonService) { }

  ngOnInit() {
    this.updateItemButton1.targetId = 1;
    console.log('--- target1: ', this.updateItemButton1.targetId);
    console.log('--- target2: ', this.updateItemButton2.targetId);
  }

}
