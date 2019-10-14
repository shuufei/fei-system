import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableBehaviorComponent } from './data-table-behavior.component';

describe('DataTableBehaviorComponent', () => {
  let component: DataTableBehaviorComponent;
  let fixture: ComponentFixture<DataTableBehaviorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableBehaviorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableBehaviorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
