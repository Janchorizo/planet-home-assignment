import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'shared-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Output() clickEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

	handleClick() {
		this.clickEvent.emit(null);
	}
}
