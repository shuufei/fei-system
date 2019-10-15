import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Todo } from 'src/app/interface/todo';

@Component({
  selector: 'fei-todo-board',
  templateUrl: './todo-board.component.html',
  styleUrls: ['./todo-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoBoardComponent implements OnInit {
  @Input() todos: Todo[];
  @Output() changeDone: EventEmitter<Todo> = new EventEmitter();

  constructor() {
    this.todos = [];
  }

  ngOnInit(): void {}

}
