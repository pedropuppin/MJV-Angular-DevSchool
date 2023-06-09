import {
  Component,
  ChangeDetectionStrategy,
  Inject,
  HostBinding,
} from '@angular/core';
import { ComponentConfig, CONFIG_TOKEN } from '../configuration.const';

@Component({
  selector: 'app-configurable',
  templateUrl: './configurable.component.html',
  styleUrls: ['./configurable.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigurableComponent {
  @HostBinding('style.color')
  color: string;

  @HostBinding('style.borderRadius')
  borderRadius: string;

  @HostBinding('style.backgroundColor')
  backgroundColor: string;

  constructor(@Inject(CONFIG_TOKEN) private config: ComponentConfig) {
    this.color = config.color;
    this.backgroundColor = config.backgroundColor;
    this.borderRadius = config.borderRadius;
    // seta as propriedades do config para as propriedades do componente
  }
}

// @HostBinding -> serve para setar algum estilo ou propriedade para alterar o comportamento no elemento que está sendo renderizado

// @Inject(CONFIG_TOKEN) -> está injetando o CONFIG_TOKEN que é do tipo ComponentConfig no "config"
