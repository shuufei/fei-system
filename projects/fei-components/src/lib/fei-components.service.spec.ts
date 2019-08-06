import { TestBed } from '@angular/core/testing';

import { FeiComponentsService } from './fei-components.service';

describe('FeiComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeiComponentsService = TestBed.get(FeiComponentsService);
    expect(service).toBeTruthy();
  });
});
