import { InjectionToken } from '@angular/core';

export interface ComponentConfig {
  color: string;
  borderRadius: string;
  backgroundColor: string;
}

export const CONFIG_TOKEN = new InjectionToken<ComponentConfig>(
  'component_config'
);

export const DEFAULT_CONFIG: ComponentConfig = {
  color: 'red',
  borderRadius: '1rem',
  backgroundColor: 'black',
};
