import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Todo } from 'src/app/interface/todo';
import { ApiService } from 'src/app/core/api.service';
import { TodosService } from 'src/app/services/todos.service';

export abstract class TodoBoardService<T> {
  abstract todos$: Observable<T[]>;
  abstract loadTodos: () => void;
  abstract updateTodos: (todo: T) => void;
}

@Injectable({
  providedIn: 'root'
})
export class TodoBoardDefaultService implements TodoBoardService<Todo> {

  constructor(
    private api: ApiService,
    private todosService: TodosService,
  ) { }

  get todos$() {
    return this.todosService.todos$;
  }

  loadTodos() {
    const todos = this.api.getTodos();
    this.todosService.setTodos(todos);
  }

  updateTodos(todo: Todo) {
    const todos = this.todosService.todos;
    const changeTarget = todos.find(v => v.uuid === todo.uuid);
    if (changeTarget == null) { return; }
    changeTarget.isDone = todo.isDone;
    this.todosService.setTodos(todos);
  }
}
