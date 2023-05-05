import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  Directive,
} from '@angular/core';
import { mixinLikeable } from '../../mixins/likeable.mixin';
import { HasEntityId } from '../../mixins/has-entity-id.type';
import { mixinClappable } from '../../mixins/clappable.mixin';

@Directive() // decorator
class PostComponentBase implements HasEntityId { // implementa a interface HasEntityId (/mixins/has-entity-id.type.ts)
  @Input() // permite que dados sejam passados de um componente pai para um componente filho
  entityId!: string;
}

const MixedBasePostComponent = mixinClappable(mixinLikeable(PostComponentBase));
// são funções que estão definidas na pasta de 'mixins'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  // changeDetection: ChangeDetectionStrategy.OnPush,
})

export class PostComponent extends MixedBasePostComponent {
  @Input()
  content!: string;

  constructor() {
    super();
  }
}


// Podemos usar mixins como base para criar diferentes comportamentos em componentes, sem precisar repetir código.

