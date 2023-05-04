import { Meta, Story } from '@storybook/angular';
import { SharedModule } from '../../shared.module';
import { ContentTriggerComponent } from './content-trigger.component';

export default {
  title: 'ContentTrigger',
  component: ContentTriggerComponent,
  argTypes: {},
} as Meta<ContentTriggerComponent>;

const Template: Story<ContentTriggerComponent> = (
  args: ContentTriggerComponent
) => ({
  props: args,
  moduleMetadata: {
    imports: [SharedModule],
  },
  template: `
<app-content-trigger>
  <div titulo>Titulo da Aba <button app-content-trigger [customData]="'Fechar'">X</button></div>
  <button app-content-trigger [customData]="{ prop: 'some data' }">
    MY CUSTOM BUTTON
  </button>
</app-content-trigger>
`,
});

export const Basic = Template.bind({});
Basic.args = {};


// <button app-content-trigger [customData]="'Fechar'">X</button> -> customData é um input da diretiva. Quando clicar no X, vai disparar o evento
// onClick na diretiva e vai passar o valor 'Fechar' para o componente pai pela função triggerSomeEvent()


// <button app-content-trigger [customData]="{ prop: 'some data' }"> -> É outro botão que recebe uma customData "{ prop: 'some data' }". Quando
// clicar vai disparar o evento onClick na diretiva e vai passar o valor "{ prop: 'some data' }" para o componente pai pela função triggerSomeEvent()
