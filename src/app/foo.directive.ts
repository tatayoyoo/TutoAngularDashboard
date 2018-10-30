import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFoo]'
})
export class FooDirective {

  constructor(el: ElementRef, renderer: Renderer2)
  {
    renderer.setStyle(el.nativeElement, 'color', 'red');
    console.log(el);
  }

}
