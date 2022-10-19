import { UserOrdersTableLoading } from '@app/modules/user/components/user-orders-table-loading/user-orders-table-loading.component';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'User/Orders table loading',
  component: UserOrdersTableLoading,
} as ComponentMeta<typeof UserOrdersTableLoading>;

const Template: ComponentStory<typeof UserOrdersTableLoading> = (args) => (
  <UserOrdersTableLoading {...args} />
);

export const View = Template.bind({});
View.args = {};
