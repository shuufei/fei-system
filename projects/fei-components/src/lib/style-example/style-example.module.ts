import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorComponent } from './color/color.component';
import { RoundComponent } from './round/round.component';
import { ShadowComponent } from './shadow/shadow.component';
import { TypographyComponent } from './typography/typography.component';

@NgModule({
  declarations: [
    ColorComponent,
    RoundComponent,
    ShadowComponent,
    TypographyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ColorComponent,
    RoundComponent,
    ShadowComponent,
    TypographyComponent
  ]
})
export class StyleExampleModule { }
