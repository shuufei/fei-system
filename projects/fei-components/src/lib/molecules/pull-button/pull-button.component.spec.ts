import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PullButtonComponent } from './pull-button.component';

describe('PullButtonComponent', () => {
  let component: PullButtonComponent;
  let fixture: ComponentFixture<PullButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PullButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PullButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
