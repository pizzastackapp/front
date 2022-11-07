import { CartItem } from '@app/modules/cart/components/cart-item/cart-item.component';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Cart/Cart item',
  component: CartItem,
} as ComponentMeta<typeof CartItem>;

const Template: ComponentStory<typeof CartItem> = (args) => (
  <CartItem {...args} />
);

export const Pizza = Template.bind({});
Pizza.args = {
  image: 'menu/menu-1660636947',
  title: 'Піца барбекю',
  count: 2,
  price: 148,
};

export const Drink = Template.bind({});
Drink.args = {
  image: 'menu/menu-1661108318',
  title: 'Піца барбекю',
  count: 2,
  price: 148,
};
