import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  ViewEncapsulation,
} from '@angular/core';

// Pure component (também conhecido como Dumb Component, pq não tem nenhuma regra de negócio) *1
@Component({
  selector: 'app-pure-component',
  template: `
    <div>open: {{ open }}</div>
    <div>count: {{ count }}</div>

    <button (click)="triggerOutput()">Trigger output</button>
  `,
  styleUrls: ['./pure-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush, // *2
  encapsulation: ViewEncapsulation.Emulated // *3
})
export class PureComponentComponent implements OnInit {
  @Input()
  open = false;

  count = 0;

  @Output()
  buttonClicked = new EventEmitter<number>();

  constructor(private changeDetectorRef: ChangeDetectorRef) {} // *4

  ngOnInit(): void {
    setInterval(() => {
      this.count += 1;
      this.changeDetectorRef.markForCheck(); // Linha 39
    }, 100);
  }

  // se a linha 39 for comentadada, o componente não será renderizado e só será renderizado quando o botão for clicado

  triggerOutput(): void {
    this.buttonClicked.emit(this.count);
  }
}


// 1. Componentes Puros -> são componentes que fazem sua comunicação com o mundo externo através de @Input e @Output;

// 2. ChangeDetectionStrategy.OnPush -> faz com que o componente SÓ seja renderizado quando houver mudança no @Input ou ele emitir um @Output.
// Evita que o angular fique verificando o estado do componente a todo momento, o que pode ser custoso em termos de performance;

// 3. ViewEncapsulation.None (É o padrão) -> é o encapsulamento que faz com que o css do componente seja global, ou seja, qualquer componente pode usar o css desse componente.
// 3. ViewEncapsulation.Emulated -> é o encapsulamento padrão do angular, que faz com que o css do componente não vaze para fora dele (não possa ser usado por outros componentes).
// 3. ViewEncapsulation.ShadowDom -> é o encapsulamento que faz com que o css do componente seja encapsulado em uma shadow root, que é uma árvore de elementos que fica separada da
// árvore principal do DOM. Não é muito usado, é melhor usar o Emulated.

// 4. ChangeDetectorRef -> é uma classe que permite que você controle o ciclo de vida do componente, como por exemplo, forçar a renderização do componente.
// No caso da linha 39, estamos usando o método markForCheck() que força a renderização do componente;;
