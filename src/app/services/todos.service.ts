import { Injectable } from '@angular/core';
import * as _ from 'lodash';

import { Todo } from '../interface/todo';
import { BehaviorSubject } from 'rxjs';

interface State {
  todos: Todo[];
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private state: State = {
    todos: [],
  };

  private todosSubject = new BehaviorSubject(this.state.todos);
  // tslint:disable-next-line: variable-name
  private _todos$ = this.todosSubject.asObservable();

  constructor() { }

  get todos$() {
    return this._todos$;
  }

  get todos() {
    return _.cloneDeep(this.state.todos);
  }

  setTodos(todos: Todo[]) {
    const value = _.cloneDeep(todos);
    this.state.todos = value;
    this.todosSubject.next(value);
  }
}
