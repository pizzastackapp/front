import { MenuList } from '@app/modules/menu/components/menu-list/menu-list.component';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import pizzaMenu from '@app/mocks/pizza.json';

export default {
  title: 'Menu/Menu List',
  component: MenuList,
} as ComponentMeta<typeof MenuList>;

const Template: ComponentStory<typeof MenuList> = (args) => (
  <MenuList {...args} />
);

export const View = Template.bind({});
View.args = {
  items: pizzaMenu,
};
