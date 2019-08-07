import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'fei-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingComponent implements OnInit {
  @Input() size: LoadingSize;

  constructor() {
    this.size = 'm';
  }

  ngOnInit() {
  }

}

export type LoadingSize = 's' | 'm' | 'l';
