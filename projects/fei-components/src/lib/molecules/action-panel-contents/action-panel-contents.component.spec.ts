import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionPanelContentsComponent } from './action-panel-contents.component';

describe('ActionPanelContentsComponent', () => {
  let component: ActionPanelContentsComponent;
  let fixture: ComponentFixture<ActionPanelContentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionPanelContentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionPanelContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
