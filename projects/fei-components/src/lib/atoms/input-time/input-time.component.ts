import { Component, OnInit, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'fei-input-time',
  templateUrl: './input-time.component.html',
  styleUrls: ['./input-time.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTimeComponent implements OnInit {
  @Input() formControl: FormControl;
  @Input() full: boolean;
  @HostBinding('style.display') get hostDisplay() { return this.full ? 'block' : 'inline-block'; }

  constructor() {
    this.formControl = new FormControl('');
    this.full = false;
  }

  ngOnInit() {
  }

}
