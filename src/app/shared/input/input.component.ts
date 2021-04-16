import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'shared-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
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

  ngOnInit(): void {
    this.value = this.initialValue === null ? '' : this.initialValue;
    this.type = this.type === null ? 'text' : this.type;
  }

  handleChange(newValue) {
    this.value = newValue;
    this.onChange.emit(newValue)
  }
}
