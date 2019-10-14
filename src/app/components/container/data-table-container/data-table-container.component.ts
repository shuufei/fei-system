import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'fei-data-table-container',
  templateUrl: './data-table-container.component.html',
  styleUrls: ['./data-table-container.component.scss']
})
export class DataTableContainerComponent implements OnInit {

  columns: (keyof SensorData)[] = [
    'name', 'sensorAA', 'sensorBB', 'sensorCC', 'sensorDD'
  ];
  editableColumns: (keyof SensorData)[] = [
    'sensorAA', 'sensorBB', 'sensorCC', 'sensorDD'
  ];

  dataList: SensorData[] = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.dataList = this.api.getSensorDataList();
  }

  update(data: SensorData) {
    console.log('--- update in data-table-container: ', data);
  }

}

export interface SensorData {
  name: string;
  sensorAA: number;
  sensorBB: number;
  sensorCC: number;
  sensorDD: number;
}
