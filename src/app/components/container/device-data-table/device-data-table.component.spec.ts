import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceDataTableComponent } from './device-data-table.component';

describe('DeviceDataTableComponent', () => {
  let component: DeviceDataTableComponent;
  let fixture: ComponentFixture<DeviceDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
