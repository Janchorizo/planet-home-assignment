import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';
import { UndoableInputComponent } from './undoable-input/undoable-input.component';



@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    UndoableInputComponent
  ],
  exports: [
      ButtonComponent,
      InputComponent,
      UndoableInputComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class SharedModule { }
