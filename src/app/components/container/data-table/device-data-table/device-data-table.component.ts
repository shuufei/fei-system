import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DataTableService } from '../data-table.service';
import { DeviceDataTableService } from './device-data-table.service';

@Component({
  selector: 'fei-device-data-table',
  templateUrl: './device-data-table.component.html',
  styleUrls: ['./device-data-table.component.scss'],
  providers: [{ provide: DataTableService, useClass: DeviceDataTableService }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeviceDataTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
