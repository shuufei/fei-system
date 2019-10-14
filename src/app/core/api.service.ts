import { Injectable } from '@angular/core';
import uuidv4 from 'uuid/v4';

import { Todo } from '../interface/todo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getTodos(): Todo[] {
    return [
      { uuid: uuidv4(), title: 'todo1', isDone: false },
      { uuid: uuidv4(), title: 'todo2', isDone: true },
      { uuid: uuidv4(), title: 'todo3', isDone: false },
      { uuid: uuidv4(), title: 'todo4', isDone: false },
    ];
  }
}
