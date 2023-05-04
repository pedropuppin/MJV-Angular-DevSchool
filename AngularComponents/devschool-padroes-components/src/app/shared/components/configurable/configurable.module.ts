import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurableComponent } from './configurable/configurable.component';
import {
  CONFIG_TOKEN,
  DEFAULT_CONFIG,
  ComponentConfig,
} from './configuration.const';

@NgModule({
  declarations: [ConfigurableComponent],
  imports: [CommonModule],
  exports: [ConfigurableComponent],
  providers: [
    {
      provide: CONFIG_TOKEN,
      useValue: DEFAULT_CONFIG, // falando pra usar expecificamente as especificações do DEFAULT_CONFIG
    },
  ],
})
export class ConfigurableModule {
  public static forRoot(
    config: Partial<ComponentConfig> // o Partial permite que as propriedades do ComponentConfig sejam opcionais
  ): ModuleWithProviders<ConfigurableModule> {
    return {
      ngModule: ConfigurableModule,
      providers: [
        {
          provide: CONFIG_TOKEN,
          useFactory: () => {
            return {
              ...DEFAULT_CONFIG,
              ...config,
            };
          },
        },
      ],
      // Vai retornar o mesmo módulo, onde o provider vai ser sobreescrito com o useFactory retornando as DEFAULT_CONFIG mergeadas
      // com as "config" passadas pelo usuário
    };
  }
}

// O método estático forRoot é usado como um construtor personalizado para o módulo ConfigurableModule.
// Ele permite que os desenvolvedores possam passar um objeto de configuração para personalizar o comportamento
// do módulo sem precisar criar uma nova instância da classe ConfigurableModule
