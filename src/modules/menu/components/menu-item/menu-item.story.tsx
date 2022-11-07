import { MenuItem } from '@app/modules/menu/components/menu-item/menu-item.component';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Menu/Menu Item',
  component: MenuItem,
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args) => (
  <MenuItem {...args} />
);

export const General = Template.bind({});
General.args = {
  image: 'menu/menu-1660636988',
  weight: 555,
  title: 'Піга Мангеттен',
  ingredients:
    '(подвійна порція грибів), Гриби, Моцарела, Пепероні, Соус Альфредо',
  price: 215,
};

export const Drink = Template.bind({});
Drink.args = {
  image: 'menu/menu-1661109230',
  price: 50,
  title: 'Узвар Ярмолинці з шипшиною',
  ingredients: '',
  fitImage: true,
};
