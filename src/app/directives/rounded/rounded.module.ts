import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoundedDirective } from '../rounded/rounded.directive';



@NgModule({
  declarations: [
    RoundedDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [RoundedDirective]
})
export class RoundedModule { }
