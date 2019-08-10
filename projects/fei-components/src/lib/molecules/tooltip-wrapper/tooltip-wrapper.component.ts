import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { TooltipPosition } from '../../atoms/tooltip/tooltip.component';

@Component({
  selector: 'fei-tooltip-wrapper',
  templateUrl: './tooltip-wrapper.component.html',
  styleUrls: ['./tooltip-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipWrapperComponent implements OnInit {
  @Input() label: string;
  @Input() position: TooltipPosition;

  constructor() {
    this.label = 'tooltip';
    this.position = 'top';
  }

  ngOnInit() {
  }

}
