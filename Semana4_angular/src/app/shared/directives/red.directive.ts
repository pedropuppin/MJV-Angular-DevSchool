import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {
  constructor(elementRef: ElementRef) { //recebe uma ref de um elemento HTML quando for utilizada
    // faz a manipulação do comportamento
    elementRef.nativeElement.style.color = 'blue';
  }
}

// As diretivas de atributo tratam de alterar a aparência e o comportamento do elemento dom
// cria a pasta de diretivas dentro da pasta que vai estar a alteração -> comando "ng g directive nome-dir" ou "ng g d nome-dir"
