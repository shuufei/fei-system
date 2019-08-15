import { Component, OnInit, ChangeDetectionStrategy, Input, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'fei-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('dialog', [
      state('*', style({
        opacity: 1
      })),
      state('void', style({
        top: '8%',
        opacity: 0
      })),
      transition('void => *', [
        animate('0.3s ease-out')
      ]),
      transition('* => void', [
        animate('0.25s ease-out')
      ])
    ])
  ]
})
export class DialogComponent implements OnInit, AfterViewInit {
  @Input() open: boolean;
  @Input() hideHeader: boolean;
  @Input() hideFooter: boolean;
  @ViewChild('contents', { static: false }) contents: ElementRef | undefined;
  @ViewChild('header', { static: false }) header: ElementRef | undefined;

  headerShadow = false;
  headerHeight = 0;

  constructor(private ref: ChangeDetectorRef) {
    this.open = false;
    this.hideHeader = false;
    this.hideFooter = false;
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    if (this.header) {
      this.headerHeight = this.header.nativeElement.clientHeight;
      this.ref.detectChanges();
    }
    this.setHeaderShadow();
  }

  get contentsOffset() {
    return this.hideHeader ? 24 : 12;
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
