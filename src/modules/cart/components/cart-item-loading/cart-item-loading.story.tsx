import { CartItemLoading } from '@app/modules/cart/components/cart-item-loading/cart-item-loading.component';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Cart/Cart item loading',
  component: CartItemLoading,
} as ComponentMeta<typeof CartItemLoading>;

const Template: ComponentStory<typeof CartItemLoading> = (args) => (
  <CartItemLoading {...args} />
);

export const View = Template.bind({});
