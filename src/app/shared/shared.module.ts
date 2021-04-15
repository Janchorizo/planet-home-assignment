import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';;
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { createStore } from 'redux';

import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component'
import { UndoableInputComponent } from './undoable-input/undoable-input.component';
import { ContainerComponent } from './container/container.component';
import { PageContainerComponent } from './page-container/page-container.component';
import { UserActions } from 'src/redux/userActions';
import { appReducer } from 'src/redux/appReducer';

const store = createStore(appReducer);

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
    HttpClientModule,
    CommonModule
  ],
  providers: [
    { provide: 'AppStore', useValue: store },
    UserActions
  ]
})
export class SharedModule { }
