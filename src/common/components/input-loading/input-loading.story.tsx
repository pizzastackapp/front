import { InputLoading } from '@app/common/components/input-loading/input-loading.component';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Common/Input loading',
  component: InputLoading,
} as ComponentMeta<typeof InputLoading>;

const Template: ComponentStory<typeof InputLoading> = (args) => (
  <InputLoading {...args} />
);

export const View = Template.bind({});
