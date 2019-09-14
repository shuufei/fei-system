import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FeiComponentsComponent } from './fei-components.component';
import { ButtonComponent } from './atoms/button/button.component';
import { LabelComponent } from './atoms/label/label.component';
import { TooltipComponent } from './atoms/tooltip/tooltip.component';
import { IconComponent } from './atoms/icon/icon.component';
import { LoadingComponent } from './atoms/loading/loading.component';
import { InputTextComponent } from './atoms/input-text/input-text.component';
import { TextareaComponent } from './atoms/textarea/textarea.component';
import { CheckboxComponent } from './atoms/checkbox/checkbox.component';
import { SelectComponent } from './atoms/select/select.component';
import { CheckboxWrapperComponent } from './molecules/checkbox-wrapper/checkbox-wrapper.component';
import { TooltipWrapperComponent } from './molecules/tooltip-wrapper/tooltip-wrapper.component';
import { StyleExampleModule } from './style-example/style-example.module';
import { PullButtonComponent } from './molecules/pull-button/pull-button.component';
import { ThumbnailComponent } from './atoms/thumbnail/thumbnail.component';
import { CalendarComponent } from './molecules/calendar/calendar.component';
import { CalendarButtonComponent } from './molecules/calendar-button/calendar-button.component';
import { AccountsGroupAccordionComponent } from './organisms/accounts-group-accordion/accounts-group-accordion.component';
import { AccountListItemComponent } from './molecules/account-list-item/account-list-item.component';
import { DialogComponent } from './molecules/dialog/dialog.component';
import { ActionPanelContentsComponent } from './molecules/action-panel-contents/action-panel-contents.component';
import { ActionPanelTabComponent } from './molecules/action-panel-tab/action-panel-tab.component';
import { ActionPanelComponent } from './organisms/action-panel/action-panel.component';
import { DialogLogoutComponent } from './organisms/dialog-logout/dialog-logout.component';
import { NavigationBarComponent } from './organisms/navigation-bar/navigation-bar.component';
import { InputTimeComponent } from './atoms/input-time/input-time.component';

@NgModule({
  declarations: [
    FeiComponentsComponent,
    ButtonComponent,
    LabelComponent,
    TooltipComponent,
    IconComponent,
    LoadingComponent,
    InputTextComponent,
    TextareaComponent,
    CheckboxComponent,
    SelectComponent,
    CheckboxWrapperComponent,
    TooltipWrapperComponent,
    PullButtonComponent,
    ThumbnailComponent,
    CalendarComponent,
    CalendarButtonComponent,
    AccountsGroupAccordionComponent,
    AccountListItemComponent,
    DialogComponent,
    ActionPanelContentsComponent,
    ActionPanelTabComponent,
    ActionPanelComponent,
    DialogLogoutComponent,
    NavigationBarComponent,
    InputTimeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StyleExampleModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [
    StyleExampleModule,
    FeiComponentsComponent,
    ButtonComponent,
    LabelComponent,
    TooltipComponent,
    IconComponent,
    LoadingComponent,
    InputTextComponent,
    TextareaComponent,
    CheckboxComponent,
    SelectComponent,
    CheckboxWrapperComponent,
    TooltipWrapperComponent,
    PullButtonComponent,
    ThumbnailComponent,
    CalendarComponent,
    CalendarButtonComponent,
    AccountsGroupAccordionComponent,
    AccountListItemComponent,
    DialogComponent,
    ActionPanelContentsComponent,
    ActionPanelTabComponent,
    ActionPanelComponent,
    DialogLogoutComponent,
    NavigationBarComponent,
    InputTimeComponent
  ]
})
export class FeiComponentsModule { }
