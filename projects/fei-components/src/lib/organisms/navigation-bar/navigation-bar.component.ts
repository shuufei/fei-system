import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'fei-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationBarComponent implements OnInit {
  @Input() account: { name: string; img: string; }; // tmp
  @Output() clickAccountThumbnail: EventEmitter<void> = new EventEmitter();
  @Output() logout: EventEmitter<void> = new EventEmitter();

  isOpenLogoutDialog = false;

  constructor() {
    this.account = {
      name: 'None Name',
      img: 'assets/images/default-account.png'
    };
  }

  ngOnInit() {
  }

  openLogoutDialog() {
    this.isOpenLogoutDialog = true;
  }

  closeLogoutDialog() {
    this.isOpenLogoutDialog = false;
  }

  onLogout() {
    this.closeLogoutDialog();
    this.logout.emit();
  }

}
