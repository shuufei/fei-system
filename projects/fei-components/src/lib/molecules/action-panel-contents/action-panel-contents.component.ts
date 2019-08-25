import {
  Component, OnInit, ChangeDetectionStrategy, Input, AfterViewInit,
  ViewChild, ElementRef, ChangeDetectorRef
} from '@angular/core';

@Component({
  selector: 'fei-action-panel-contents',
  templateUrl: './action-panel-contents.component.html',
  styleUrls: ['./action-panel-contents.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionPanelContentsComponent implements OnInit, AfterViewInit {
  @Input() title: string | undefined;
  @Input() hideFooter: boolean;
  @ViewChild('contents', { static: false }) contents: ElementRef | undefined;

  headerShadow = false;

  constructor(private ref: ChangeDetectorRef) {
    this.hideFooter = false;
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.setHeaderShadow();
  }

  private setHeaderShadow() {
    if (this.contents) {
      this.contents.nativeElement.addEventListener('scroll', () => {
        if (this.contents) {
          const scrollTop = this.contents.nativeElement.scrollTop;
          const headerShadow = (5 <= scrollTop);
          if (this.headerShadow !== headerShadow) {
            this.headerShadow = headerShadow;
            this.ref.detectChanges();
          }
        }
      });
    }
  }

}
