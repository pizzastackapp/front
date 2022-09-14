import { Counter } from '@app/common/components/counter/counter.component';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Common/Counter',
  component: Counter,
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => (
  <Counter {...args} />
);

export const View = Template.bind({});
View.args = {
  children: 'Відправити код ще раз',
};
