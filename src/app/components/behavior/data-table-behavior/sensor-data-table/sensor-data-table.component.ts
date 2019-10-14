import { Component, OnInit } from '@angular/core';
import { DataTableService } from '../data-table-behavior.component';
import { SensorDataTableService } from './sensor-data-table.service';

@Component({
  selector: 'fei-sensor-data-table-b',
  templateUrl: './sensor-data-table.component.html',
  styleUrls: ['./sensor-data-table.component.scss'],
  providers: [
    { provide: DataTableService, useClass: SensorDataTableService }
  ]
})
export class SensorDataTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
