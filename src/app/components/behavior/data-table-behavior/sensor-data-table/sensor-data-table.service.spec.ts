import { TestBed } from '@angular/core/testing';

import { SensorDataTableService } from './sensor-data-table.service';

describe('SensorDataTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SensorDataTableService = TestBed.get(SensorDataTableService);
    expect(service).toBeTruthy();
  });
});
