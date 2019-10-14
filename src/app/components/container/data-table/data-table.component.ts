import { Component, OnInit } from '@angular/core';

import { DataTableService, DataTableDefaultService } from './data-table.service';
import { SensorData } from 'src/app/interface/sensor-data';
import { DeviceData } from 'src/app/interface/device-data';

@Component({
  selector: 'fei-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {

  constructor(private dataTableService: DataTableService<SensorData | DeviceData>) { }

  ngOnInit() {
    this.dataTableService.loadData();
  }

  get columns() {
    return this.dataTableService.columns;
  }

  get editableColumns() {
    return this.dataTableService.editableColumns;
  }

  get dataList() {
    return this.dataTableService.dataList;
  }

  update(data: any) {
    this.dataTableService.update(data);
  }
}
