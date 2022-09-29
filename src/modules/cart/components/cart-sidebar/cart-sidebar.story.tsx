import { CartSidebar } from '@app/modules/cart/components/cart-sidebar/cart-sidebar.component';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Cart/Cart sidebar',
  component: CartSidebar,
} as ComponentMeta<typeof CartSidebar>;

const Template: ComponentStory<typeof CartSidebar> = (args) => (
  <CartSidebar {...args} />
);

export const View = Template.bind({});
View.args = {
  items: [
    {
      image: 'menu/menu-1660636947',
      title: 'Піца барбекю',
      count: 2,
      price: 148,
    },
    {
      image: 'menu/menu-1660636947',
      title: 'Піца qwe',
      count: 3,
      price: 250,
    },
    {
      image: 'menu/menu-1660636947',
      title: 'Піца wer',
      count: 1,
      price: 100,
    },
  ],
};
