import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'fei-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThumbnailComponent implements OnInit {
  @Input() src: string;
  @Input() size: number | undefined;

  constructor() {
    this.src = 'assets/images/no-image.png';
    this.size = 50;
  }

  ngOnInit() {
  }

  get backgroundImagePath() {
    return `url(${this.src})`;
  }

}
