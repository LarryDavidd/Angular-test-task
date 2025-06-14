import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNoSelect]',
})
export class NoSelectDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'user-select', 'none');
    this.renderer.setStyle(
      this.el.nativeElement,
      '-webkit-user-select',
      'none'
    );
    this.renderer.setStyle(this.el.nativeElement, '-moz-user-select', 'none');
    this.renderer.setStyle(this.el.nativeElement, '-ms-user-select', 'none');
  }
}
