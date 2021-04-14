import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'shared-undoable-input',
  templateUrl: './undoable-input.component.html',
  styleUrls: ['./undoable-input.component.scss']
})
export class UndoableInputComponent implements OnInit {
  @Input()
  type: string | null;

  @Input()
  label: string | null;

  @Input()
  placeholder: string | null;

  @Input()
  initialValue: string | null;

  @Output() onChange = new EventEmitter<string>();

  value: string;
  get edited(){
    return this.initialValue != this.value;
  }

  ngOnInit(): void {
    this.value = this.initialValue === null ? '' : this.initialValue;
    this.type = this.type === null ? 'text' : this.type;
  }

  handleChange(newValue) {
    this.value = newValue;
  }

  handleSaveClick(){
    this.onChange.emit(this.value);
  }

  handleUndoClick(){
    this.value = this.initialValue;
  }
}
