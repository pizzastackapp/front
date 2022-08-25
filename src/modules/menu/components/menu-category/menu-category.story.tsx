import { MenuCategory } from '@app/modules/menu/components/menu-category/menu-category.component';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Menu/Menu Category',
  component: MenuCategory,
} as ComponentMeta<typeof MenuCategory>;

const Template: ComponentStory<typeof MenuCategory> = (args) => (
  <div className="flex">
    <MenuCategory {...args} />
  </div>
);

export const View = Template.bind({});
View.args = {
  data: {
    id: 'f4b1f793-524c-408e-8c1b-a9c7c6029822',
    slug: 'pizza',
    title: 'Піца',
    menu_items: [
      {
        id: '6eb1cb6f-a36e-4abd-a816-b8f9a3d7f49f',
        category_id: '6eb1cb6f-a36e-4abd-a816-b8f9a3d7f49f',
        image: 'menu/menu-1660635752',
        ingredients:
          'Кукурудза, Цибуля, Гриби, Ковбаски баварські, Моцарела, Соус Барбекю',
        price: 215,
        title: 'Піца Техас',
        weight: 550,
      },
      {
        id: '72d1586d-f070-4d43-a23a-e6eb34e6ed95',
        category_id: '6eb1cb6f-a36e-4abd-a816-b8f9a3d7f49f',
        image: 'menu/menu-1660635899',
        ingredients: 'Курка, Цибуля, Бекон, Гриби, Моцарела, Соус Барбекю',
        price: 255,
        title: 'Піца Барбекю',
        weight: 552,
      },
      {
        id: '23a2cc9f-2e17-4516-882f-364b68839978',
        category_id: '6eb1cb6f-a36e-4abd-a816-b8f9a3d7f49f',
        image: 'menu/menu-1660636947',
        ingredients: 'Моцарела, Пепероні, Помідори, Соус Барбекю',
        price: 215,
        title: 'Піца Пепероні з томатами',
        weight: 554,
      },
      {
        id: '73383c80-2ecb-4f40-9174-ea24acd1b796',
        category_id: '6eb1cb6f-a36e-4abd-a816-b8f9a3d7f49f',
        image: 'menu/menu-1660638814',
        ingredients: 'Цибуля, Бекон, Шинка, Гриби, Моцарела, Соус Альфредо',
        price: 250,
        title: 'Піца Карбонара',
        weight: 540,
      },
      {
        id: '94720c8c-cd05-41f8-b144-5fbfdee3cb36',
        category_id: '6eb1cb6f-a36e-4abd-a816-b8f9a3d7f49f',
        image: 'menu/menu-1660636300',
        ingredients: '(подвійна порція моцарели), Моцарела, Соус PizzaStack',
        price: 250,
        title: 'Піца Маргаріта',
        weight: 552,
      },
      {
        id: 'ecc5f06d-b8af-4c45-9add-ea3cabfa7753',
        category_id: '6eb1cb6f-a36e-4abd-a816-b8f9a3d7f49f',
        image: 'menu/menu-1660636765',
        ingredients:
          '(подвійна порція грибів), Гриби, Моцарела, Пепероні, Соус Альфредо',
        price: 215,
        title: 'Піца Мангеттен',
        weight: 555,
      },
      {
        id: '52162379-5fd2-4dc1-b737-b1185075c874',
        category_id: '6eb1cb6f-a36e-4abd-a816-b8f9a3d7f49f',
        image: 'menu/menu-1660635535',
        ingredients: 'Моцарела, Пепероні, Соус PizzaStack',
        price: 250,
        title: 'Піца Пепероні',
        weight: 560,
      },
      {
        id: '27764394-dd7f-4d4c-8999-c66731e1e573',
        category_id: '6eb1cb6f-a36e-4abd-a816-b8f9a3d7f49f',
        image: 'menu/menu-1660636961',
        ingredients: 'Шинка, Гриби, Моцарела, Соус PizzaStack',
        price: 215,
        title: 'Піца Шинка та гриби',
        weight: 545,
      },
      {
        id: '2facea92-5600-4e71-a58e-fed521679579',
        category_id: '6eb1cb6f-a36e-4abd-a816-b8f9a3d7f49f',
        image: 'menu/menu-1660636988',
        ingredients:
          'Курка, Фрикадельки, Цибуля, Бекон, Болгарський перець, Моцарела, Соус Барбекю',
        price: 250,
        title: 'Піца Гриль Мікс',
        weight: 569,
      },
    ],
  },
};
