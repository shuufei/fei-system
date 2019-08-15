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

  readonly DEFAULT_SRC = 'assets/images/no-image.png';

  constructor() {
    this.src = this.DEFAULT_SRC;
    this.size = 50;
  }

  ngOnInit() {
  }

  get backgroundImagePath() {
    return `url(${this.src ? this.src : this.DEFAULT_SRC})`;
  }

}
