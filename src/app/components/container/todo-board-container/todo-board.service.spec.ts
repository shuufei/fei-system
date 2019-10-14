import { TestBed } from '@angular/core/testing';

import { TodoBoardService } from './todo-board.service';

describe('TodoBoardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoBoardService = TestBed.get(TodoBoardService);
    expect(service).toBeTruthy();
  });
});
