import { UserOrdersTable } from '@app/modules/user/components/user-orders-table/user-orders-table.component';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'User/Orders table component',
  component: UserOrdersTable,
} as ComponentMeta<typeof UserOrdersTable>;

const Template: ComponentStory<typeof UserOrdersTable> = (args) => (
  <UserOrdersTable {...args} />
);

const mockData = {
  data: {
    orders: [
      {
        created_at: '2022-09-04T12:32:54.465169+00:00',
        order_items: [
          {
            amount: 1,
            item: {
              title: 'Піца Карбонара',
            },
          },
          {
            amount: 1,
            item: {
              title: 'Red Bull 0.3л',
            },
          },
        ],
        status: 'DELIVERED',
        sum: 322,
      },
      {
        created_at: '2022-09-04T12:32:54.465169+00:00',
        order_items: [
          {
            amount: 1,
            item: {
              title: 'Сік Galicia Смузі Яблуко-Банан-Манго-Апельсин 0.2л',
            },
          },
          {
            amount: 1,
            item: {
              title: 'Coca Cola 2л',
            },
          },
          {
            amount: 1,
            item: {
              title: 'Піца Техас',
            },
          },
          {
            amount: 1,
            item: {
              title: 'Піца Пепероні з томатами',
            },
          },
        ],
        status: 'DELIVERED',
        sum: 492,
      },
      {
        created_at: '2022-09-04T12:32:54.465169+00:00',
        order_items: [
          {
            amount: 1,
            item: {
              title: 'Піца Пепероні',
            },
          },
          {
            amount: 1,
            item: {
              title: 'Піца Пепероні з томатами',
            },
          },
        ],
        status: 'DELIVERED',
        sum: 465,
      },
      {
        created_at: '2022-09-04T12:32:54.465169+00:00',
        order_items: [
          {
            amount: 1,
            item: {
              title: 'Піца Техас',
            },
          },
          {
            amount: 1,
            item: {
              title: 'Піца Маргаріта',
            },
          },
        ],
        status: 'DELIVERED',
        sum: 465,
      },
      {
        created_at: '2022-09-04T12:32:54.465169+00:00',
        order_items: [
          {
            amount: 1,
            item: {
              title: 'Піца Техас',
            },
          },
          {
            amount: 1,
            item: {
              title: 'Піца Пепероні',
            },
          },
        ],
        status: 'DELIVERED',
        sum: 465,
      },
      {
        created_at: '2022-09-04T12:32:54.465169+00:00',
        order_items: [
          {
            amount: 1,
            item: {
              title: 'Піца Маргаріта',
            },
          },
          {
            amount: 1,
            item: {
              title: 'Узвар Ярмолинці з шипшиною',
            },
          },
        ],
        status: 'DELIVERED',
        sum: 300,
      },
      {
        created_at: '2022-09-04T12:32:54.465169+00:00',
        order_items: [
          {
            amount: 1,
            item: {
              title: 'Піца Пепероні',
            },
          },
          {
            amount: 1,
            item: {
              title: 'Сік "Наш Сік" яблучний 0.95л',
            },
          },
        ],
        status: 'DELIVERED',
        sum: 305,
      },
      {
        created_at: '2022-09-04T12:32:54.465169+00:00',
        order_items: [
          {
            amount: 1,
            item: {
              title: 'Піца Гриль Мікс',
            },
          },
          {
            amount: 1,
            item: {
              title: 'Red Bull 0.3л',
            },
          },
        ],
        status: 'DELIVERED',
        sum: 322,
      },
      {
        created_at: '2022-09-04T12:32:54.465169+00:00',
        order_items: [
          {
            amount: 1,
            item: {
              title: 'Піца Шинка та гриби',
            },
          },
          {
            amount: 1,
            item: {
              title: 'Сік Galicia Смузі Яблуко-Банан-Манго-Апельсин 0.2л',
            },
          },
        ],
        status: 'DELIVERED',
        sum: 235,
      },
      {
        created_at: '2022-09-04T12:32:54.465169+00:00',
        order_items: [
          {
            amount: 1,
            item: {
              title: 'Піца Маргаріта',
            },
          },
          {
            amount: 1,
            item: {
              title: 'Сік Galicia Смузі Яблуко-Банан-Манго-Апельсин 0.2л',
            },
          },
        ],
        status: 'DELIVERED',
        sum: 270,
      },
    ],
    order_status: [
      {
        id: 'NEW',
        label: 'Новий',
      },
      {
        id: 'IN_PROGRESS',
        label: 'Готується',
      },
      {
        id: 'DONE',
        label: 'Готовий до видачі',
      },
      {
        id: 'DELIVERED',
        label: 'Виданий клієнту',
      },
      {
        id: 'CANCELED',
        label: 'Відмінений',
      },
    ],
    payment_status: [
      {
        id: 'PROCESSING',
        label: 'Очікуємо оплати',
      },
      {
        id: 'SUCCEEDED',
        label: 'Оплачено',
      },
      {
        id: 'FAILED',
        label: 'Оплату відмінено',
      },
    ],
  },
};

export const View = Template.bind({});
View.args = {
  data: mockData.data.orders as any,
  orderStatus: mockData.data.order_status,
};
