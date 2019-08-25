import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { IconNames } from '../../atoms/icon/icon.component';

@Component({
  selector: 'fei-action-panel-tab',
  templateUrl: './action-panel-tab.component.html',
  styleUrls: ['./action-panel-tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionPanelTabComponent implements OnInit {
  @Input() icon: IconNames;
  @Input() label: string;
  @Input() active: boolean;
  @Input() first: boolean;
  @Input() last: boolean;

  constructor() {
    this.icon = 'users';
    this.label = '';
    this.active = false;
    this.first = false;
    this.last = false;
  }

  ngOnInit() {
  }

}
