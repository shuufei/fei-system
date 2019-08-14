import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'fei-calendar-button',
  templateUrl: './calendar-button.component.html',
  styleUrls: ['./calendar-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarButtonComponent implements OnInit {
  @Input() date: Date | null;

  constructor() {
    this.date = null;
  }

  ngOnInit() {
  }

  get yyyym() {
    if (this.date != null) {
      return moment(this.date).format('YYYY年M月');
    } else {
      return null;
    }
  }

}
