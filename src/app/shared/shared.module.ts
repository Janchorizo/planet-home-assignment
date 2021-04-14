import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent
  ],
  exports: [
      ButtonComponent,
      InputComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class SharedModule { }
