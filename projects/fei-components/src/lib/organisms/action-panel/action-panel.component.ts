import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'fei-action-panel',
  templateUrl: './action-panel.component.html',
  styleUrls: ['./action-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('panel', [
      state('*', style({
        opacity: 1
      })),
      state('void', style({
        opacity: 0
      })),
      transition('void => *', [
        animate('0.3s 0.2s ease-out')
      ]),
      transition('* => void', [
        animate('0s ease-out')
      ])
    ])
  ]
})
export class ActionPanelComponent implements OnInit, OnChanges {
  @Input() open: boolean;

  activeTab: ActionTab = 'users';
  isOpen = false;

  constructor() {
    this.open = false;
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.open && changes.open.currentValue != null) {
      this.isOpen = changes.open.currentValue;
    }
  }

  get actionTabs() {
    return ActionTabs;
  }

  onClickTab(tab: ActionTab) {
    this.activeTab = tab;
    this.openActionPanel();
  }

  openActionPanel() {
    this.isOpen = true;
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

}

export type ActionTab = 'users' | 'bulkUpdate' | 'workingDetail';
export const ActionTabs: { [k in ActionTab]: ActionTab } = {
  users: 'users',
  bulkUpdate: 'bulkUpdate',
  workingDetail: 'workingDetail'
};
