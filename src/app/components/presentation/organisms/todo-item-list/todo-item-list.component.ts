import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import * as _ from 'lodash';
import { Todo } from 'src/app/interface/todo';

@Component({
  selector: 'fei-todo-item-list',
  templateUrl: './todo-item-list.component.html',
  styleUrls: ['./todo-item-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemListComponent implements OnInit {
  @Input() todos: Todo[];
  @Output() changeDone: EventEmitter<Todo> = new EventEmitter();

  constructor() {
    this.todos = [];
  }

  ngOnInit() {
  }

  onChangeDone(uuid: string, isDone: boolean) {
    const todo = _.cloneDeep(this.todos).find(v => v.uuid === uuid);
    if (todo != null) {
      todo.isDone = isDone;
      this.changeDone.emit(todo);
    }
  }

}
