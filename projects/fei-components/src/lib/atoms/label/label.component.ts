import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'fei-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabelComponent implements OnInit {
  @Input() label: string;
  @Input() isNum: boolean;

  constructor() {
    this.label = 'label';
    this.isNum = false;
  }

  ngOnInit() {
  }

}
