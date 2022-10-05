import { RadioInput } from '@app/common/components/radio-input/radio-input.component';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Form/Radio',
  component: RadioInput,
} as ComponentMeta<typeof RadioInput>;

const Template: ComponentStory<typeof RadioInput> = (args) => (
  <RadioInput {...args} />
);

export const View = Template.bind({});
View.args = {
  value: 'cash',
  label: 'Готівка',
  name: 'payment',
  defaultChecked: false,
};
