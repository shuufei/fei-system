import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoBoardContainerComponent } from './todo-board-container/todo-board-container.component';
import { PresentationModule } from '../presentation/presentation.module';
import { DataTableContainerComponent } from './data-table-container/data-table-container.component';
import { FeiComponentsModule } from 'projects/fei-components/src/public-api';
import { SensorDataTableComponent } from './sensor-data-table/sensor-data-table.component';
import { DeviceDataTableComponent } from './device-data-table/device-data-table.component';



@NgModule({
  declarations: [
    TodoBoardContainerComponent,
    DataTableContainerComponent,
    SensorDataTableComponent,
    DeviceDataTableComponent,
  ],
  imports: [
    CommonModule,
    FeiComponentsModule,
    PresentationModule
  ],
  exports: [
    TodoBoardContainerComponent,
    DataTableContainerComponent,
    SensorDataTableComponent,
    DeviceDataTableComponent,
  ]
})
export class ContainerModule { }
