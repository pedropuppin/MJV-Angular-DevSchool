import {
  AfterViewInit,
  Component,
  QueryList,
  ViewChild, // serve para pegar um elemento filho (referencia o próprio template do componente filho)
  ViewChildren, // serve para pegar vários elementos filhos
} from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements AfterViewInit { // *1
  @ViewChildren(ChildComponent) // pega todos os elementos filhos do tipo ChildComponent em child.component.ts
  componentesFilho!: QueryList<ChildComponent>;
  // QueryList -> é uma classe do angular que representa uma lista de elementos. Ela é uma classe genérica que permite
  // definir o tipo de elemento que ela vai conter. No geral é utilizada como um array iterável.

  filhos: number[] = [1];

  constructor() {
    console.log('construtor:', this.componentesFilho);
  }

  ngAfterViewInit(): void {
    console.log(this.componentesFilho);
  }

  chamarFilho() {
    this.componentesFilho.forEach((component) => {
      component.incrementar();
    });
  }

  adicionarFilho() {
    this.filhos.push(this.filhos.length + 1);
  }
}


// 1. AfterViewInit -> é um lifecycle hook que é chamado depois que a view do componente é inicializada. Serve para possibilitar o
// uso do @ViewChild e @ViewChildren, pois esses decorators só podem ser usados depois que a view do componente é inicializada.

// caso fosse apenas um componente filho seria:

// @ViewChild(ChildComponent)
//  componenteFilho!: ChildComponent;

// chamarFilho() {
//   this.componenteFilho.incrementar();
// }
