import { Injectable } from '@angular/core';

import { SensorData } from 'src/app/interface/sensor-data';
import { DataTableService } from '../data-table.service';
import { ApiService } from 'src/app/core/api.service';

const SENSOR_DATA_TABLE_COLUMNS: (keyof SensorData)[] = ['name', 'sensorAA', 'sensorBB', 'sensorCC', 'sensorDD'];
const SENSOR_DATA_TABLE_EDITABLE_COLUMNS: (keyof SensorData)[] = ['sensorAA', 'sensorBB', 'sensorCC', 'sensorDD'];

@Injectable({
  providedIn: 'root'
})
export class SensorDataTableService implements DataTableService<SensorData> {

  private sensorDataList: SensorData[] = [];

  constructor(private api: ApiService) { }

  get columns() {
    return SENSOR_DATA_TABLE_COLUMNS;
  }

  get editableColumns() {
    return SENSOR_DATA_TABLE_EDITABLE_COLUMNS;
  }

  get dataList() {
    return this.sensorDataList;
  }

  loadData() {
    this.sensorDataList = this.api.getSensorDataList();
  }

  update(data: SensorData) {
    console.log('--- update data in sensor-data-table.service: ', data);
  }
}
