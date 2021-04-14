import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shared-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  @Input()
  id: string | null;

  @Input()
  rounded: boolean | null;

  @Input()
  bgColor: string | null;

  @Input()
  extraClasses: string | null;

  cssClasses: string;

  ngOnInit(): void {
    this.id = this.id === null ? '' : this.id;
    this.bgColor = this.bgColor === null ? 'white' : this.bgColor;

    this.cssClasses = [
      'container',
      this.rounded === null ? '' : 'container-rounded',
      this.extraClasses === null ? '' : this.extraClasses
    ].join(' ');
  }
}
