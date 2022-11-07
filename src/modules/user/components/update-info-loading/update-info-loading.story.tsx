import { UpdateInfoLoading } from '@app/modules/user/components/update-info-loading/update-info-loading.component';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'User/Update info loading form',
  component: UpdateInfoLoading,
} as ComponentMeta<typeof UpdateInfoLoading>;

const Template: ComponentStory<typeof UpdateInfoLoading> = (args) => (
  <UpdateInfoLoading {...args} />
);

export const View = Template.bind({});
