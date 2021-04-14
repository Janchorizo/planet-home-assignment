import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndoableInputComponent } from './undoable-input.component';

describe('UndoableInputComponent', () => {
  let component: UndoableInputComponent;
  let fixture: ComponentFixture<UndoableInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UndoableInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UndoableInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
