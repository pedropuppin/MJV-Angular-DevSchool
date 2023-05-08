import { Meta, Story } from '@storybook/angular';
import { ButtonComponent } from './button.component';


// faz export default de um objeto que contém o título e o componente que será renderizado
export default {
  title: 'Button',
  component: ButtonComponent, // é o componente que será renderizado no storybook
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story = (args) => ({
  props: args,
});

// cada export é um label que aparece no storybook
export const Primary = Template.bind({});


Primary.args = {
  primary: true,
  label: 'Button',
};
