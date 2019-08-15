import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsGroupAccordionComponent } from './accounts-group-accordion.component';

describe('AccountsGroupAccordionComponent', () => {
  let component: AccountsGroupAccordionComponent;
  let fixture: ComponentFixture<AccountsGroupAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsGroupAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsGroupAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
