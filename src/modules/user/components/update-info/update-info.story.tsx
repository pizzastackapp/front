import { UpdateInfo } from '@app/modules/user/components/update-info/update-info.component';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'User/Update info form',
  component: UpdateInfo,
} as ComponentMeta<typeof UpdateInfo>;

const Template: ComponentStory<typeof UpdateInfo> = (args) => (
  <UpdateInfo {...args} />
);

export const View = Template.bind({});
