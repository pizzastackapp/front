import { UserOrders } from '@app/modules/user/components/user-orders/user-orders.component';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'User/Orders table',
  component: UserOrders,
} as ComponentMeta<typeof UserOrders>;

const Template: ComponentStory<typeof UserOrders> = (args) => (
  <UserOrders {...args} />
);

export const View = Template.bind({});
