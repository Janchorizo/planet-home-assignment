import { Component, OnInit, Input, OnChanges } from '@angular/core';

const ANIMATION_TYPES = [
  'corner',
  'side'
];

@Component({
  selector: 'shared-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.scss']
})
export class PageContainerComponent implements OnInit, OnChanges {
  @Input()
  bgColor: string | null;

  @Input()
  altBgColor: string | null;

  @Input()
  contentBgColor: string | null;

  @Input()
  animationType: string | null;

  @Input()
  focused: boolean;

  @Input()
  transitioned: boolean;

  cssClasses: string;

  ngOnInit(): void {
    this.bgColor = this.bgColor === undefined ? '#5545ba' : this.bgColor;
    this.altBgColor = this.altBgColor === undefined ? '#009998' : this.altBgColor;
    this.contentBgColor = this.contentBgColor === undefined ? 'white' : this.contentBgColor;
    this.animationType = (this.animationType === undefined || !ANIMATION_TYPES.includes(this.animationType)
      ? ANIMATION_TYPES[0]
      : this.animationType);

    this.cssClasses = this.getCssClasses();
  }

  ngOnChanges() {
    this.cssClasses = this.getCssClasses();
  }

  private getCssClasses() {
    return [
      'pageContainer',
      this.animationType,
      this.focused === false ? '' : 'focused',
      this.transitioned === false ? '' : 'transitioned',
    ].join(' ')
  }
}
