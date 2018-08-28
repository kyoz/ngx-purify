import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[pureAutofocus]',
})
export class PureAutofocusDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.el.nativeElement.focus();
  }
}
