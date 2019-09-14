import { Component, OnInit, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'fei-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTextComponent implements OnInit {
  @Input() formControl: FormControl;
  @Input() placeholder: string;
  @Input() full: boolean;
  @HostBinding('style.display') get hostDisplay() { return this.full ? 'block' : 'inline-block'; }

  constructor() {
    this.formControl = new FormControl('');
    this.placeholder = '入力してください';
    this.full = false;
  }

  ngOnInit() {
  }

}
