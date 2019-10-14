import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableBehaviorComponent } from './data-table-behavior/data-table-behavior.component';
import { FeiComponentsModule } from 'projects/fei-components/src/public-api';
import { PresentationModule } from '../presentation/presentation.module';
import { SensorDataTableComponent } from './data-table-behavior/sensor-data-table/sensor-data-table.component';
import { DeviceDataTableComponent } from './data-table-behavior/device-data-table/device-data-table.component';



@NgModule({
  declarations: [
    DataTableBehaviorComponent,
    SensorDataTableComponent,
    DeviceDataTableComponent,
  ],
  imports: [
    CommonModule,
    FeiComponentsModule,
    PresentationModule,
  ],
  exports: [
    DataTableBehaviorComponent,
    SensorDataTableComponent,
    DeviceDataTableComponent,
  ]
})
export class BehaviorModule { }
