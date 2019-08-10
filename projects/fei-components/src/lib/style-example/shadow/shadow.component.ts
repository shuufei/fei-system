import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'fei-shadow',
  templateUrl: './shadow.component.html',
  styleUrls: ['./shadow.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShadowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
