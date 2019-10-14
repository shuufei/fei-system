import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';

const DEVICE_DATA_TABLE_COLUMNS: (keyof DeviceData)[] = ['name', 'ip', 'model', 'comment'];
const DEVICE_DATA_TABLE_EDITABLE_COLUMNS: (keyof DeviceData)[] = ['comment'];

@Component({
  selector: 'fei-device-data-table',
  templateUrl: './device-data-table.component.html',
  styleUrls: ['./device-data-table.component.scss']
})
export class DeviceDataTableComponent implements OnInit {

  columns = DEVICE_DATA_TABLE_COLUMNS;
  editableColumns = DEVICE_DATA_TABLE_EDITABLE_COLUMNS;
  dataList: DeviceData[] = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.dataList = this.api.getDeviceDataList();
  }

  update(data: DeviceData) {
    console.log('--- update data in device-data-table: ', data);
  }

}

export interface DeviceData {
  name: string;
  ip: string;
  model: string;
  comment: string;
}
