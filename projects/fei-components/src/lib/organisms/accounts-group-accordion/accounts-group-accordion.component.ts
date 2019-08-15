import {
  Component, OnInit, ChangeDetectionStrategy, Input, OnChanges,
  SimpleChanges, OnDestroy, ViewChild, ElementRef, AfterViewInit
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'fei-accounts-group-accordion',
  templateUrl: './accounts-group-accordion.component.html',
  styleUrls: ['./accounts-group-accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountsGroupAccordionComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  @Input() groupName: string;
  @Input() accounts: AccountsGroupAccordionAccount[];
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
    const sub = this.groupCheckbox.valueChanges.subscribe(value => {
      this.accounts.forEach(account => account.formControl.setValue(value, { emitEvent: false }));
    });
    this.subscriptions.push(sub);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.accounts && changes.accounts.currentValue) {
      this.resetAccountsSubscriptions();
      for (const account  of changes.accounts.currentValue as AccountsGroupAccordionAccount[]) {
        const sub = account.formControl.valueChanges.subscribe(() => {
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
    // const open = this.open;
    // if (this.open === false) { // 閉じる時はtransitionが終了してからフラグを切り替える
    //   this.open = true;
    // }
    setTimeout(() => { // 描画された後に
      if (!this.accordionElement) { return; }
      const element = this.accordionElement.nativeElement;
      if (this.open) {
        element.style.height = `${this.accordionHeight}px`;
        // element.style.height = `${this.accordionHeight}px`;
        // // tslint:disable-next-line:only-arrow-functions
        // element.addEventListener('transitioned', function() {
        //   // tslint:disable-next-line:no-arg
        //   element.removeEventListener('transitionend', arguments.callee);
        //   element.style.height = null;
        // });
      } else {
        element.style.height = `${this.accordionHeadHeight}px`;
        // const elementTransition = element.style.transition;
        // element.style.transition = '';
        // requestAnimationFrame(() => {
        //   element.style.height = `${this.accordionHeight}px`;
        //   element.style.transition = elementTransition;
        //   requestAnimationFrame(() => {
        //     element.style.height = `${this.accordionHeadHeight}px`;
        //     // this.open = false;
        //   });
        // });
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
