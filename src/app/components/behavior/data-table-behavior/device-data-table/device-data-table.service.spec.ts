import { TestBed } from '@angular/core/testing';

import { DeviceDataTableService } from './device-data-table.service';

describe('DeviceDataTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeviceDataTableService = TestBed.get(DeviceDataTableService);
    expect(service).toBeTruthy();
  });
});
