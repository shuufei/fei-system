import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeiComponentsComponent } from './fei-components.component';

describe('FeiComponentsComponent', () => {
  let component: FeiComponentsComponent;
  let fixture: ComponentFixture<FeiComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeiComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeiComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
