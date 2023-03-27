import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRounded]'
})
export class RoundedDirective {

  constructor(public elementRef: ElementRef, public renderer2 : Renderer2) { 
    const elementoHtml = elementRef.nativeElement;
    console.log(elementoHtml)

    renderer2.setStyle(elementoHtml, 'border-radius', '50px')
    renderer2.setStyle(elementoHtml, 'background-color', 'crimson')
    renderer2.setStyle(elementoHtml, 'padding', '10px')
  }

}
