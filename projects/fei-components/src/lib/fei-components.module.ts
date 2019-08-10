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
    SelectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FeiComponentsComponent,
    ButtonComponent,
    LabelComponent,
    TooltipComponent,
    IconComponent,
    LoadingComponent,
    InputTextComponent,
    TextareaComponent,
    CheckboxComponent,
    SelectComponent
  ]
})
export class FeiComponentsModule { }
