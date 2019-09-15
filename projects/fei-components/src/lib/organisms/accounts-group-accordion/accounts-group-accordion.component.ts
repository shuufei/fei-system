import {
  Component, OnInit, ChangeDetectionStrategy, Input, OnChanges,
  SimpleChanges, OnDestroy, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'fei-accounts-group-accordion',
  templateUrl: './accounts-group-accordion.component.html',
  styleUrls: ['./accounts-group-accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountsGroupAccordionComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  @Input() groupName: string;
  @Input() accounts: AccountsGroupAccordionAccount[];
  @Output() added: EventEmitter<AccountsGroupAccordionAccount> = new EventEmitter();
  @Output() removed: EventEmitter<AccountsGroupAccordionAccount> = new EventEmitter();
  @ViewChild('accordion', { static: false }) accordionElement: ElementRef | undefined;
  @ViewChild('accordionHead', { static: false }) accordionHeadElement: ElementRef | undefined;

  open = false;
  groupCheckbox: FormControl = new FormControl(false);
  subscriptions: Subscription[] = [];
  accountsSubscriptions: Subscription[] = [];

  constructor() {
    this.groupName = 'None Group';
    this.accounts = [];
  }

  get accordionHeight() {
    return this.accordionElement ? this.accordionElement.nativeElement.scrollHeight : 0;
  }

  get accordionHeadHeight() {
    return this.accordionHeadElement ? this.accordionHeadElement.nativeElement.scrollHeight : 0;
  }

  ngOnInit() {
    const sub = this.groupCheckbox.valueChanges.pipe(
      filter(v => typeof v === 'boolean'),
    ).subscribe(value => {
      this.accounts.forEach(account => {
        if (value !== account.formControl.value) {
          account.formControl.setValue(value, { emitEvent: false });
          if (value) {
            this.added.emit(account);
          } else {
            this.removed.emit(account);
          }
        }
      });
    });
    this.subscriptions.push(sub);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.accounts && changes.accounts.currentValue) {
      this.resetAccountsSubscriptions();
      for (const account  of changes.accounts.currentValue as AccountsGroupAccordionAccount[]) {
        const sub = account.formControl.valueChanges.pipe(
          filter(v => typeof v === 'boolean'),
        ).subscribe(value => {
          if (value) {
            this.added.emit(account);
          } else {
            this.removed.emit(account);
          }
          this.setGroupChecked();
        });
        this.accountsSubscriptions.push(sub);
      }
      this.setGroupChecked();
    }
  }

  ngAfterViewInit(): void {
    if (this.accordionElement && this.accordionHeadElement) {
      const element = this.accordionElement.nativeElement;
      element.style.height = `${this.accordionHeadHeight}px`;
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
    this.resetAccountsSubscriptions();
  }

  toggleOpen() {
    this.open = !this.open;
    setTimeout(() => { // 描画された後にheightを指定する
      if (!this.accordionElement) { return; }
      const element = this.accordionElement.nativeElement;
      if (this.open) {
        element.style.height = `${this.accordionHeight}px`;
      } else {
        element.style.height = `${this.accordionHeadHeight}px`;
      }
    }, 0);
  }

  private setGroupChecked() {
    let groupChecked = true;
    for (const account  of this.accounts as AccountsGroupAccordionAccount[]) {
      if (!account.formControl.value) {
        groupChecked = false;
        break;
      }
    }
    this.groupCheckbox.setValue(groupChecked, { emitEvent: false });
  }

  private resetAccountsSubscriptions() {
    this.accountsSubscriptions.forEach(s => s.unsubscribe());
    this.accountsSubscriptions = [];
  }
}

export interface AccountsGroupAccordionAccount {
  name: string;
  img: string | undefined;
  formControl: FormControl;
}
