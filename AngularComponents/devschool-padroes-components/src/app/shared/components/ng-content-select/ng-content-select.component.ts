import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ContentChild,
} from '@angular/core';
import { PureComponentComponent } from '../pure-component/pure-component.component';

@Component({
  selector: 'app-ng-content-select',
  template: `
    <div class="top-left">
      <ng-content select="[top-left]"></ng-content>
    </div>
    <div class="top-right">
      <ng-content select="[top-right]"></ng-content>
    </div>
    <div class="bottom-left">
      <ng-content select="[bottom-left]"></ng-content>
    </div>
    <div class="bottom-right">
      <ng-content select="h1"></ng-content>
    </div>
  `,
  styleUrls: ['./ng-content-select.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgContentSelectComponent {
  @ContentChild(PureComponentComponent)
  pureComponent!: PureComponentComponent;
}

// <ng-content select="[top-left]"> -> tem um selector que vai selecionar o conteúdo que tem o atributo top-left
// ele seleciona o contéúdo lá no story

// Conseguimos segmentar o conteúdo que queremos projetar dentro do componente. (conteúdo no story)
