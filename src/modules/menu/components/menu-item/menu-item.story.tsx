import { MenuItem } from '@app/modules/menu/components/menu-item/menu-item.component';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Menu/Menu Item',
  component: MenuItem,
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args) => (
  <MenuItem {...args} />
);

export const View = Template.bind({});
View.args = {
  image: '/assets/pizza/manhattan.jpeg',
  weight: 555,
  title: 'Піга Мангеттен',
  ingredients:
    '(подвійна порція грибів), Гриби, Моцарела, Пепероні, Соус Альфредо',
  price: 215,
};
