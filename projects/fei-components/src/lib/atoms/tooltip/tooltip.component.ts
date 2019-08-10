import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'fei-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent implements OnInit {
  @Input() label: string;
  @Input() position: TooltipPosition;

  constructor() {
    this.label = 'tooltip';
    this.position = 'top';
  }

  ngOnInit() {
  }

}

export type TooltipPosition = 'left' | 'top' | 'right' | 'bottom';
