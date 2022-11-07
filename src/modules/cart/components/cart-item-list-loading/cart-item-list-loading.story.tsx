import { CartItemListLoading } from '@app/modules/cart/components/cart-item-list-loading/cart-item-list-loading.component';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Cart/Cart item list loading',
  component: CartItemListLoading,
} as ComponentMeta<typeof CartItemListLoading>;

const Template: ComponentStory<typeof CartItemListLoading> = (args) => (
  <CartItemListLoading {...args} />
);

export const View = Template.bind({});
