import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button/button.component';
import { LabelComponent } from './label/label.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { IconComponent } from './icon/icon.component';


@NgModule({
  declarations: [
    ButtonComponent,
    LabelComponent,
    TooltipComponent,
    IconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    LabelComponent,
    TooltipComponent,
    IconComponent
  ]
})
export class AtomsModule { }
