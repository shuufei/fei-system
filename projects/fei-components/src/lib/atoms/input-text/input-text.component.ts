import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
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

  constructor() {
    this.formControl = new FormControl('');
    this.placeholder = '入力してください';
    this.full = false;
  }

  ngOnInit() {
  }

}
