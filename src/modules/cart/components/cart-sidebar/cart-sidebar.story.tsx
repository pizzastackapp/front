import { CartSidebar } from '@app/modules/cart/components/cart-sidebar/cart-sidebar.component';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Cart/Cart sidebar',
  component: CartSidebar,
} as ComponentMeta<typeof CartSidebar>;

const Template: ComponentStory<typeof CartSidebar> = () => <CartSidebar />;

export const View = Template.bind({});
