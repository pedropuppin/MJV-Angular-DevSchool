import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {
  constructor(elementRef: ElementRef) { //recebe uma ref de um elemento HTML quando for utilizada
    elementRef.nativeElement.style.color = 'blue';
  }
}
