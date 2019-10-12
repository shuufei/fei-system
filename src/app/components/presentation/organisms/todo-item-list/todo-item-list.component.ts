import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/interface/todo';

@Component({
  selector: 'fei-todo-item-list',
  templateUrl: './todo-item-list.component.html',
  styleUrls: ['./todo-item-list.component.scss']
})
export class TodoItemListComponent implements OnInit {
  @Input() todos: Todo[];

  constructor() {
    this.todos = [];
  }

  ngOnInit() {
  }

  onChangeDone(uuid: string, isDone: boolean) {
    console.log('--- change done in todo item list: ', uuid, isDone);
  }

}
