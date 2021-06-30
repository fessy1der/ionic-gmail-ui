import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HideHeaderDirective } from './hide-header/hide-header.module';



@NgModule({
  declarations: [
    HideHeaderDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [HideHeaderDirective]
})
export class SharedDirectivesModule { }
