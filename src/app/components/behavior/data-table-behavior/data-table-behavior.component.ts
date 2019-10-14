import { Component, OnInit } from '@angular/core';
import { SensorData } from '../../container/data-table-container/data-table-container.component';
import { DeviceData } from '../../container/device-data-table/device-data-table.component';

@Component({
  selector: 'fei-data-table-behavior',
  templateUrl: './data-table-behavior.component.html',
  styleUrls: ['./data-table-behavior.component.scss']
})
export class DataTableBehaviorComponent implements OnInit {

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

export abstract class DataTableService<T> {
  abstract columns: (keyof T)[];
  abstract editableColumns: (keyof T)[];
  abstract dataList: (T)[];
  abstract loadData: () => void;
  abstract update: (data: T) => void;
}
