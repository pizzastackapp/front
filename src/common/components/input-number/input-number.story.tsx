import { InputNumber } from '@app/common/components/input-number/input-number.component';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Form/Input number',
  component: InputNumber,
} as ComponentMeta<typeof InputNumber>;

const Template: ComponentStory<typeof InputNumber> = (args) => (
  <InputNumber {...args} />
);

export const View = Template.bind({});
