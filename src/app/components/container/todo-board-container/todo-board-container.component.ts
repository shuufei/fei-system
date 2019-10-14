import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from 'src/app/core/api.service';
import { TodosService } from 'src/app/services/todos.service';
import { Todo } from 'src/app/interface/todo';

@Component({
  selector: 'fei-todo-board-container',
  templateUrl: './todo-board-container.component.html',
  styleUrls: ['./todo-board-container.component.scss']
})
export class TodoBoardContainerComponent implements OnInit {

  todos$: Observable<Todo[]>;

  constructor(
    private api: ApiService,
    private todosService: TodosService,
  ) {
    this.todos$ = this.todosService.todos$;
  }

  ngOnInit() {
    this.loadTodos();
  }

  onChangeDone(todo: Todo) {
    const todos = this.todosService.todos;
    const changeTarget = todos.find(v => v.uuid === todo.uuid);
    if (changeTarget == null) { return; }
    changeTarget.isDone = todo.isDone;
    this.todosService.setTodos(todos);
  }

  private loadTodos() {
    const todos = this.api.getTodos();
    this.todosService.setTodos(todos);
  }
}
