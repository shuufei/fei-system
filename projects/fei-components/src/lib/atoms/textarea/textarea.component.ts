import { Component, OnInit, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'fei-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextareaComponent implements OnInit {
  @Input() formControl: FormControl;
  @Input() placeholder: string;
  @Input() full: boolean;
  @Input() rows: number;
  @HostBinding('style.display') get hostDisplay() { return this.full ? 'block' : 'inline-block'; }

  constructor() {
    this.formControl = new FormControl('');
    this.placeholder = '入力してください';
    this.full = false;
    this.rows = 5;
  }

  ngOnInit() {
  }

}
