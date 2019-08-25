import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'fei-dialog-logout',
  templateUrl: './dialog-logout.component.html',
  styleUrls: ['./dialog-logout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogLogoutComponent implements OnInit {
  @Input() open: boolean;
  @Output() logout: EventEmitter<void> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new EventEmitter();

  constructor() {
    this.open = false;
  }

  ngOnInit() {
  }

}
