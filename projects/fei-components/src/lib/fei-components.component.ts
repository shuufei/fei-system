import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'fei-components',
  template: `
    <p>
      fei-components works!
    </p>
  `,
  styleUrls: ['../scss/00-styles.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FeiComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
