import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoBoardContainerComponent } from './todo-board-container/todo-board-container.component';
import { PresentationModule } from '../presentation/presentation.module';



@NgModule({
  declarations: [
    TodoBoardContainerComponent,
  ],
  imports: [
    CommonModule,
    PresentationModule
  ],
  exports: [
    TodoBoardContainerComponent,
  ]
})
export class ContainerModule { }
