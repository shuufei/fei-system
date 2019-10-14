import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoBoardContainerComponent } from './todo-board-container.component';

describe('TodoBoardContainerComponent', () => {
  let component: TodoBoardContainerComponent;
  let fixture: ComponentFixture<TodoBoardContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoBoardContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoBoardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
