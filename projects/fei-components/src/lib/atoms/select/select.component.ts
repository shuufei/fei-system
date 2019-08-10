import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'fei-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent implements OnInit {
  @Input() formControl: FormControl;
  @Input() selectOptions: SelectOption[];
  @Input() full: boolean;
  @Input() shadow: boolean;

  constructor() {
    this.formControl = new FormControl('');
    this.selectOptions = [];
    this.full = false;
    this.shadow = false;
  }

  ngOnInit() {
  }

}

export interface SelectOption {
  value: any;
  label: string;
}
