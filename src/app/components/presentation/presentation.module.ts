import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from './molecules/todo-item/todo-item.component';
import { FeiComponentsModule } from 'projects/fei-components/src/public-api';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoItemListComponent } from './organisms/todo-item-list/todo-item-list.component';



@NgModule({
  declarations: [
    TodoItemComponent,
    TodoItemListComponent
  ],
  imports: [
    CommonModule,
    FeiComponentsModule,
    ReactiveFormsModule,
  ],
  exports: [
    TodoItemComponent,
    TodoItemListComponent
  ]
})
export class PresentationModule { }
