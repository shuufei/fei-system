import { NgModule } from '@angular/core';
import { FeiComponentsComponent } from './fei-components.component';

import { AtomsModule } from './atoms/atoms.module';

@NgModule({
  declarations: [FeiComponentsComponent],
  imports: [
    AtomsModule
  ],
  exports: [FeiComponentsComponent, AtomsModule]
})
export class FeiComponentsModule { }
