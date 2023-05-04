import { Directive, HostListener, Input } from '@angular/core';
import { ContentTriggerComponent } from './content-trigger.component';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[app-content-trigger]', // [app-content-trigger] -> é uma diretiva de atributo que vai ser aplicada no botão (nesse caso
  // tem o mesmo nome que o componente, mas não precisa ser o mesmo nome)
})
export class ContentTriggerDirective<T = any> {
  @Input()
  customData: T | undefined = undefined;

  @HostListener('click')
  onClick(): void {
    this.parent.triggerSomeEvent(this.customData);
  }

  constructor(private parent: ContentTriggerComponent) { // injetando o componente pai
    console.log('trigger');
  }
}


// @HostListener -> é um decorator que vai escutar um evento no elemento que a diretiva está aplicada
