import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'fei-checkbox-wrapper',
  templateUrl: './checkbox-wrapper.component.html',
  styleUrls: ['./checkbox-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxWrapperComponent implements OnInit {
  @Input() formControl: FormControl;

  constructor() {
    this.formControl = new FormControl(false);
  }

  ngOnInit() {
  }

}
