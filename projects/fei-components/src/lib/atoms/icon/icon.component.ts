import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

export type IconNames =
  'calendar' | 'calendarEdit' | 'close' | 'logOut' | 'timeSpan' | 'users' |
  'arrow' | 'arrowTop' | 'arrowBottom' | 'arrowLeft' | 'arrowRight';
export const Icons: { [k in IconNames]: { path: string; white: string | null; } } = {
  calendar: {
    path: 'assets/icons/calendar.svg',
    white: null
  },
  calendarEdit: {
    path: 'assets/icons/calendar-edit.svg',
    white: 'assets/icons/calendar-edit-white.svg'
  },
  close: {
    path: 'assets/icons/close.svg',
    white: null
  },
  logOut: {
    path: 'assets/icons/log-out.svg',
    white: null
  },
  timeSpan: {
    path: 'assets/icons/time-span.svg',
    white: 'assets/icons/time-span-white.svg'
  },
  users: {
    path: 'assets/icons/users.svg',
    white: 'assets/icons/users-white.svg'
  },
  arrow: {
    path: 'assets/icons/arrow.svg',
    white: 'assets/icons/arrow-white.svg'
  },
  arrowTop: {
    path: 'assets/icons/arrow-top.svg',
    white: 'assets/icons/arrow-top-white.svg'
  },
  arrowBottom: {
    path: 'assets/icons/arrow-bottom.svg',
    white: 'assets/icons/arrow-bottom-white.svg'
  },
  arrowLeft: {
    path: 'assets/icons/arrow-left.svg',
    white: 'assets/icons/arrow-left-white.svg'
  },
  arrowRight: {
    path: 'assets/icons/arrow-right.svg',
    white: 'assets/icons/arrow-right-white.svg'
  },
};


@Component({
  selector: 'fei-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent implements OnInit {
  @Input() icon: IconNames;
  @Input() white: boolean;
  @Input() size: number;

  constructor() {
    this.icon = 'users';
    this.size = 24;
    this.white = false;
  }

  ngOnInit() {
  }

  get iconPath() {
    return !this.white ? Icons[this.icon].path : Icons[this.icon].white;
  }

}
