import { Component, OnInit, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'fei-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {
  @Input() label: string;
  @Input() size: ButtonSize;
  @Input() disabled: boolean;
  @Input() full: boolean;
  @Input() role: ButtonRole;
  @HostBinding('style.display') get hostDisplay() { return this.full ? 'block' : 'inline-block'; }

  constructor() {
    this.label = 'button';
    this.size = 'm';
    this.disabled = false;
    this.full = false;
    this.role = 'default';
  }

  ngOnInit() {
  }

  onClick(event: Event) {
    if (this.disabled) {
      event.preventDefault();
    }
  }

  get classNames() {
    return [this.fontClassName, this.fullClassName, this.size, ...this.roleClassName];
  }

  private get fontClassName() {
    switch (this.size) {
      case 's':
        return 'fei-caption';
      case 'm':
      case 'l':
        return 'fei-base';
      default:
        return 'fei-base';
    }
  }

  private get fullClassName() {
    return this.full ? 'full' : '';
  }

  private get roleClassName() {
    switch (this.role) {
      case 'cancel':
        return ['fei-color-black500', this.role];
      case 'danger':
        return ['fei-bg-color-danger', 'fei-color-white', 'fei-shadow-2', this.role];
      case 'default':
      default:
        return ['fei-bg-color-black500', 'fei-color-white', 'fei-shadow-2', this.role];
    }
  }

}

export type ButtonSize = 's' | 'm' | 'l';
export type ButtonRole = 'default' | 'cancel' | 'danger';
