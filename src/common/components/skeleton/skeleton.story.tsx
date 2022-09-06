import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Skeleton } from './skeleton.component';

export default {
  title: 'Common/Skeleton',
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args} />
);

export const View = Template.bind({});
View.args = {
  width: 34,
  height: 19,
};
