import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  TemplateRef,
} from '@angular/core';

// interface gerada pra representar o context usado no component.html
export interface TemplateContext {
  $implicit: string;
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-custom-template',
  templateUrl: './custom-template.component.html',
  styleUrls: ['./custom-template.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

// Componente com vários inputs que vai renderizar dois componentes
export class CustomTemplateComponent {
  @Input()
  title!: string;

  @Input()
  subtitle!: string;

  @Input()
  template: TemplateRef<TemplateContext> | null = null; // template principal

  @Input()
  templateConteudo: TemplateRef<TemplateContext> | null = null; // template que vai ser usado para renderizar os textos

  @Input()
  textos!: string[];
}
