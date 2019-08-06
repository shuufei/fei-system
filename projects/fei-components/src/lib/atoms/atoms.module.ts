import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button/button.component';
import { LabelComponent } from './label/label.component';
import { TooltipComponent } from './tooltip/tooltip.component';


@NgModule({
  declarations: [
    ButtonComponent,
    LabelComponent,
    TooltipComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    LabelComponent,
    TooltipComponent
  ]
})
export class AtomsModule { }
