import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from './header.component';

export default {
  title: 'Common/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const View = Template.bind({});
View.args = {
  categories: [
    {
      id: 'f4b1f793-524c-408e-8c1b-a9c7c6029822',
      slug: 'pizza',
      title: 'Піца',
    },
    {
      id: '165b1d86-3d08-423c-aaee-3fcdf3691353',
      slug: 'drinks',
      title: 'Напої',
    },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
