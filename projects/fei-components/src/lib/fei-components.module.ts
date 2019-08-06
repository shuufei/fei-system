import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeiComponentsComponent } from './fei-components.component';
import { ButtonComponent } from './atoms/button/button.component';
import { LabelComponent } from './atoms/label/label.component';
import { TooltipComponent } from './atoms/tooltip/tooltip.component';
import { IconComponent } from './atoms/icon/icon.component';

@NgModule({
  declarations: [
    FeiComponentsComponent,
    ButtonComponent,
    LabelComponent,
    TooltipComponent,
    IconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FeiComponentsComponent,
    ButtonComponent,
    LabelComponent,
    TooltipComponent,
    IconComponent
  ]
})
export class FeiComponentsModule { }
