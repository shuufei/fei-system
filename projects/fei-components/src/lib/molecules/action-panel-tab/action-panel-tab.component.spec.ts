import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionPanelTabComponent } from './action-panel-tab.component';

describe('ActionPanelTabComponent', () => {
  let component: ActionPanelTabComponent;
  let fixture: ComponentFixture<ActionPanelTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionPanelTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionPanelTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
