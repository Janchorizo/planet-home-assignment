import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';
import { UndoableInputComponent } from './undoable-input/undoable-input.component';
import { ContainerComponent } from './container/container.component';
import { PageContainerComponent } from './page-container/page-container.component';


@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    UndoableInputComponent,
    ContainerComponent,
    PageContainerComponent
  ],
  exports: [
      ButtonComponent,
      InputComponent,
      UndoableInputComponent,
      ContainerComponent,
      PageContainerComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class SharedModule { }
