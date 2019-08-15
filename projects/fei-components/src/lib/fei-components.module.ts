import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

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
    AccountListItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StyleExampleModule
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
    AccountListItemComponent
  ]
})
export class FeiComponentsModule { }
