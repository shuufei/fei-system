import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'fei-pull-button',
  templateUrl: './pull-button.component.html',
  styleUrls: ['./pull-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PullButtonComponent implements OnInit {
  @Input() direction: PullButtonDirection;

  constructor() {
    this.direction = 'left';
  }

  ngOnInit() {
  }

}

export type PullButtonDirection = 'right' | 'left';
