import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Todo } from 'src/app/interface/todo';
import { TodoBoardService } from './todo-board.service';

@Component({
  selector: 'fei-todo-board-container',
  templateUrl: './todo-board-container.component.html',
  styleUrls: ['./todo-board-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoBoardContainerComponent implements OnInit {

  constructor(private todoBoardService: TodoBoardService<Todo>) {}

  get todos$() {
    return this.todoBoardService.todos$;
  }

  ngOnInit() {
    this.todoBoardService.loadTodos();
  }

  onChangeDone(todo: Todo) {
    this.todoBoardService.updateTodos(todo);
  }
}
