import { Injectable } from '@angular/core';
import { DataTableService } from '../data-table-behavior.component';
import { DeviceData } from 'src/app/components/container/device-data-table/device-data-table.component';
import { ApiService } from 'src/app/core/api.service';

const DEVICE_DATA_TABLE_COLUMNS: (keyof DeviceData)[] = ['name', 'ip', 'model', 'comment'];
const DEVICE_DATA_TABLE_EDITABLE_COLUMNS: (keyof DeviceData)[] = ['comment'];

@Injectable({
  providedIn: 'root'
})
export class DeviceDataTableService implements DataTableService<DeviceData> {

  private deviceDataList: DeviceData[] = [];

  constructor(private api: ApiService) { }

  get columns() {
    return DEVICE_DATA_TABLE_COLUMNS;
  }

  get editableColumns() {
    return DEVICE_DATA_TABLE_EDITABLE_COLUMNS;
  }

  get dataList() {
    return this.deviceDataList;
  }

  loadData() {
    this.deviceDataList = this.api.getDeviceDataList();
  }

  update(data: DeviceData) {
    console.log('--- update data in device-data-table.service: ', data);
  }

}
