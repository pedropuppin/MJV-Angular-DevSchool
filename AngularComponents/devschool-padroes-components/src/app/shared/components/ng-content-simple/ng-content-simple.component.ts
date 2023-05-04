import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ContentChild,
  AfterContentInit,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { PureComponentComponent } from '../pure-component/pure-component.component';

@Component({
  selector: 'app-ng-content-simple',
  template: `
    <div>ng-content-simple works!</div>
    <ng-content></ng-content>
  `, // *1
  styleUrls: ['./ng-content-simple.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgContentSimpleComponent implements AfterContentInit { // *2
  @ContentChildren(PureComponentComponent) // *3
  pureComponent: QueryList<PureComponentComponent> | undefined;

  ngAfterContentInit(): void {
    console.log(this.pureComponent);
  }
}


// podemos projetar conteúdo dentro de um outro componente sem que esse componente tenha relação direta com o que ele vai renderizar.

// 1. ng-content -> é uma diretiva do angular que serve para projetar conteúdo dentro de um componente. (facilita a composição de componentes)
// Nesse caso, vai renderizar o conteúdo que se encontra dentro do story

// 2. AfterContentInit -> é um hook do angular que é executado depois que o conteúdo do componente é inicializado.

// 3. @ContentChildren -> é usado pra pegar componentes filhos que são encontrados dentro do ng-content.
