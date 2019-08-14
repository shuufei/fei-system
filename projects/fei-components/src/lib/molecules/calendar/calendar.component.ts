import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
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
export class CalendarComponent implements OnInit, OnChanges {
  @Input() initDate: Date;
  @Input() checkedDateList: Date[];
  @Output() clickedDate: EventEmitter<Date> = new EventEmitter();

  baseDate: Date;
  calendarArray: Array<Array<{ date: number; checked: boolean } | null>> = [];

  constructor() {
    this.initDate = new Date();
    this.checkedDateList = [];
    this.baseDate = new Date();
    this.initCalendarArray();
  }

  ngOnInit() {
    this.generateCalendar();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.initDate && changes.initDate.currentValue) {
      this.baseDate = changes.initDate.currentValue;
    }
    if (changes.checkedDateList && changes.checkedDateList.currentValue) {
      this.changeCheckedDate(changes.checkedDateList.currentValue);
    }
  }

  generateCalendar() {
    this.initCalendarArray();
    const year = this.baseDate.getFullYear();
    const month = this.baseDate.getMonth();
    const first = new Date(year, month, 1);
    const last = new Date(year, month + 1, 0);
    let weekNum = 0;
    for (let i = first.getDate(); i <= last.getDate(); i++) {
      const date = new Date(year, month, i);
      const checked = this.checkedDateList.find(d => moment(d).format('YYYYMMDD') === moment(date).format('YYYYMMDD')) != null ?
        true : false;
      this.calendarArray[weekNum][date.getDay()] = { date: i, checked };
      if (i === last.getDate()) {
        this.calendarArray.splice(weekNum + 1, WEEK_COUNT - (weekNum + 1));
      }
      if (date.getDay() === WEEK.length - 1) { weekNum++; }
    }
  }

  get yyyymm() {
    return moment(this.baseDate).format('YYYY年M月');
  }

  get week() {
    return WEEK;
  }

  nextMonth() {
    this.baseDate = new Date(this.baseDate.getFullYear(), this.baseDate.getMonth() + 1, 1);
    this.generateCalendar();
  }

  prevMonth() {
    this.baseDate = new Date(this.baseDate.getFullYear(), this.baseDate.getMonth() - 1, 1);
    this.generateCalendar();
  }

  onClickedDate(date: number) {
    this.clickedDate.emit(new Date(this.baseDate.getFullYear(), this.baseDate.getMonth(), date));
  }

  private initCalendarArray() {
    this.calendarArray = [];
    for (let index = 0; index < WEEK_COUNT; index++) {
      this.calendarArray.push([]);
    }
    this.calendarArray = this.calendarArray.map(() => WEEK.map(() => null));
  }

  private changeCheckedDate(dateList: Date[]) {
    for (const [i] of this.calendarArray.entries()) {
      for (const d of this.calendarArray[i]) {
        let checked = false;
        dateList.forEach((date: Date) => {
          if (
            d != null &&
            moment(date).format('YYYYMMDD') ===
              moment(new Date(this.baseDate.getFullYear(), this.baseDate.getMonth(), d.date)).format('YYYYMMDD')
          ) {
            checked = true;
          }
        });
        if (d != null) {
          d.checked = checked;
        }
      }
    }
  }

}
