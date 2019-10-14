import { TestBed } from '@angular/core/testing';

import { ActionButtonService } from './action-button.service';

describe('ActionButtonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActionButtonService = TestBed.get(ActionButtonService);
    expect(service).toBeTruthy();
  });
});
