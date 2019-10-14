import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoBoardContainerComponent } from './todo-board-container/todo-board-container.component';
import { PresentationModule } from '../presentation/presentation.module';
import { FeiComponentsModule } from 'projects/fei-components/src/public-api';
import { DataTableComponent } from './data-table/data-table.component';
import { SensorDataTableComponent } from './data-table/sensor-data-table/sensor-data-table.component';
import { DataTableService, DataTableDefaultService } from './data-table/data-table.service';
import { DeviceDataTableComponent } from './data-table/device-data-table/device-data-table.component';
import { TodoBoardService, TodoBoardDefaultService } from './todo-board-container/todo-board.service';

@NgModule({
  declarations: [
    TodoBoardContainerComponent,
    DataTableComponent,
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
    DataTableComponent,
    SensorDataTableComponent,
    DeviceDataTableComponent,
  ],
  providers: [
    { provide: DataTableService, useClass: DataTableDefaultService },
    { provide: TodoBoardService, useClass: TodoBoardDefaultService },
  ]
})
export class ContainerModule { }
