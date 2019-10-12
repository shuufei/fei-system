import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'fei-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() title: string;
  @Input() isDone: boolean;
  @Output() changeDone: EventEmitter<boolean> = new EventEmitter();

  fc: FormControl;

  private subscriptions: Subscription[] = [];

  constructor() {
    this.title = '';
    this.isDone = false;
    this.fc = new FormControl(this.isDone);
  }

  ngOnInit() {
    this.setFormChangedEvent();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.isDone && changes.isDone.currentValue != null) {
      this.fc.setValue(changes.isDone.currentValue);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  onClick() {
    this.fc.setValue(!this.fc.value);
  }

  private setFormChangedEvent() {
    const sub = this.fc.valueChanges.pipe(
      filter(value => typeof value === 'boolean')
    ).subscribe((value: boolean) => {
      this.changeDone.emit(value);
    });
    this.subscriptions.push(sub);
  }

}
