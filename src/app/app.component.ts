import { Component, OnInit } from '@angular/core';
import uuidv4 from 'uuid/v4';

import { Todo } from './interface/todo';

@Component({
  selector: 'fei-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fei-system';
  todos: Todo[] = [];

  ngOnInit(): void {
    this.todos.push({ uuid: uuidv4(), title: 'todo1', isDone: false });
    this.todos.push({ uuid: uuidv4(), title: 'todo2', isDone: true });
    this.todos.push({ uuid: uuidv4(), title: 'todo3', isDone: false });
    this.todos.push({ uuid: uuidv4(), title: 'todo4', isDone: false });
  }

  onChangeDone(isDone: boolean) {
    console.log('--- is Done: ', isDone);
  }
}
