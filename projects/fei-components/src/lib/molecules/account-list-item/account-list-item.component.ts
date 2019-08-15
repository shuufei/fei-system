import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'fei-account-list-item',
  templateUrl: './account-list-item.component.html',
  styleUrls: ['./account-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountListItemComponent implements OnInit {
  @Input() img: string;
  @Input() name: string | undefined;

  readonly DEFAULT_IMG = 'assets/images/default-account.png';

  constructor() {
    this.img = this.DEFAULT_IMG;
    this.name = 'None Name';
  }

  ngOnInit() {
  }

}
