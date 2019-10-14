import { TestBed } from '@angular/core/testing';

import { UpdateItemButtonService } from './update-item-button.service';

describe('UpdateItemButtonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateItemButtonService = TestBed.get(UpdateItemButtonService);
    expect(service).toBeTruthy();
  });
});
