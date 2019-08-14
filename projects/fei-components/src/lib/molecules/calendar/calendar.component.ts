import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import moment from 'moment';

const WEEK = [
  '日', '月', '火', '水', '木', '金', '土'
];
const WEEK_COUNT = 6;

@Component({
  selector: 'fei-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent implements OnInit {
  @Input() type: 'month' | 'year';
  @Input() initDate: Date;
  @Input() checkedDateList: Date[];
  @Input() multiDate: boolean;
  @Output() clickedDate: EventEmitter<Date[]> = new EventEmitter();

  calendarArray: Array<Array<{ date: number; checked: boolean } | null>> = [];

  constructor() {
    this.type = 'month';
    this.initDate = new Date();
    this.checkedDateList = [new Date(), new Date(2019, 7, 15), new Date(2019, 7, 8)];
    this.multiDate = false;
    for (let index = 0; index < WEEK_COUNT; index++) {
      this.calendarArray.push([]);
    }
  }

  ngOnInit() {
    this.initCalendarArray();
    this.generateCalendar();
  }

  generateCalendar() {
    const year = this.initDate.getFullYear();
    const month = this.initDate.getMonth();
    const first = new Date(year, month, 1);
    const last = new Date(year, month + 1, 0);
    let weekNum = 0;
    for (let i = first.getDate(); i <= last.getDate(); i++) {
      const date = new Date(year, month, i);
      const checked = this.checkedDateList.find(d => d.getDate() === date.getDate()) != null ? true : false;
      this.calendarArray[weekNum][date.getDay()] = { date: i, checked };
      if (i === last.getDate()) {
        this.calendarArray.splice(weekNum + 1, WEEK_COUNT - (weekNum + 1));
      }
      if (date.getDay() === WEEK.length - 1) { weekNum++; }
    }
  }

  get yyyymm() {
    return moment(this.initDate).format('YYYY年M月');
  }

  get week() {
    return WEEK;
  }

  private initCalendarArray() {
    this.calendarArray = this.calendarArray.map(() => WEEK.map(() => null));
  }

}
