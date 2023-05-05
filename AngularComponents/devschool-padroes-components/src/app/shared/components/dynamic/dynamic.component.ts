import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
  Injector,
} from '@angular/core';
import { PureComponentComponent } from '../pure-component/pure-component.component';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicComponent {
  @ViewChild('container', { read: ViewContainerRef }) // pegando a ref do #container no dynamic.component.html
  container!: ViewContainerRef; // armazenando na propriedade container ***

  constructor(
    // private injector: Injector, // resolve dependências do componente. Responsável por passar as dependências para uma instância do componente.
    // private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
  ) {}

  addComponent(): void {
    // const factory = this.componentFactoryResolver.resolveComponentFactory( // "resolvendo" a componentFactory do PureComponentComponent
    //   PureComponentComponent
    // );
    // const componentRef = factory.create(this.injector); // criando uma instância do componente usando o injector
    const componentRef = this.container.createComponent(PureComponentComponent); //forma recomendada
    const instance = componentRef.instance;
    instance.open = Math.random() >= 0.5;
    instance.count = Math.floor(Math.random() * 1000);
    // const compRef2 = this.container.createComponent(factory);
    // this.viewContainerRef.insert(componentRef.hostView);
  }

  removeComponent(): void {
    this.viewContainerRef.remove();
    this.container.remove();
  }
}


// O ComponentFactoryResolver esta despreciado nas versões acima do Angular 13, a forma recomendada e mais nova é usar
//o '.createComponent' do ViewContainerRef

// ViewContainerRef -> é uma classe padrão do Angular usada para gerenciar contêineres de visualizações dinâmicas,
// como por exemplo a criação de componentes dinamicamente. Ele representa um contêiner onde uma ou mais views podem ser
// inseridas, criadas, manipuladas e destruídas.

// *** O sinal '!:' é usado para indicar ao TypeScript que a propriedade container será inicializada posteriormente durante a
// execução do programa, e não precisa ser definida no momento da declaração.
