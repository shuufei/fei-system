import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { SensorData } from '../data-table-container/data-table-container.component';

const SENSOR_DATA_TABLE_COLUMNS: (keyof SensorData)[] = ['name', 'sensorAA', 'sensorBB', 'sensorCC', 'sensorDD'];
const SENSOR_DATA_TABLE_EDITABLE_COLUMNS: (keyof SensorData)[] = ['sensorAA', 'sensorBB', 'sensorCC', 'sensorDD'];

@Component({
  selector: 'fei-sensor-data-table',
  templateUrl: './sensor-data-table.component.html',
  styleUrls: ['./sensor-data-table.component.scss']
})
export class SensorDataTableComponent implements OnInit {

  columns = SENSOR_DATA_TABLE_COLUMNS;
  editableColumns = SENSOR_DATA_TABLE_EDITABLE_COLUMNS;
  dataList: SensorData[] = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.dataList = this.api.getSensorDataList();
  }

  update(data: SensorData) {
    console.log('--- update data in sensor-data-table: ', data);
  }

}
