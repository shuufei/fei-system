import { Component, OnInit } from '@angular/core';
import { DataTableService } from '../data-table.service';
import { DeviceDataTableService } from './device-data-table.service';

@Component({
  selector: 'fei-device-data-table',
  templateUrl: './device-data-table.component.html',
  styleUrls: ['./device-data-table.component.scss'],
  providers: [{ provide: DataTableService, useClass: DeviceDataTableService }]
})
export class DeviceDataTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
