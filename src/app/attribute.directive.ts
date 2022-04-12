import { Directive, Input, ElementRef, OnChanges } from '@angular/core';

@Directive({
  selector: '[appAttibute]'
})
export class AttributeDirective implements OnChanges {
  @Input()
  public appAttribute: object;

  constructor(private element: ElementRef<HTMLElement>) {}

  public ngOnChanges() {
    for (let key in this.appAttribute) {
      this.element.nativeElement.setAttribute(key, this.appAttribute[key]);
    }
  }
}