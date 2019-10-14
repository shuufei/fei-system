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
import { ActionButtonComponent } from './action-button/action-button.component';
import { ActionButtonService, ActionButtonDefaultService } from './action-button/action-button.service';
import { UpdateItemButtonComponent } from './action-button/update-item-button/update-item-button.component';

@NgModule({
  declarations: [
    TodoBoardContainerComponent,
    DataTableComponent,
    SensorDataTableComponent,
    DeviceDataTableComponent,
    ActionButtonComponent,
    UpdateItemButtonComponent,
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
    ActionButtonComponent,
    UpdateItemButtonComponent,
  ],
  providers: [
    { provide: DataTableService, useClass: DataTableDefaultService },
    { provide: TodoBoardService, useClass: TodoBoardDefaultService },
    // { provide: ActionButtonService, useClass: ActionButtonDefaultService },
  ]
})
export class ContainerModule { }
