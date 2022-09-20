import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HeaderCategoryLink } from './link.component';

export default {
  title: 'Common/Link',
  component: HeaderCategoryLink,
} as ComponentMeta<typeof HeaderCategoryLink>;

const Template: ComponentStory<typeof HeaderCategoryLink> = (args) => (
  <HeaderCategoryLink {...args} />
);

export const View = Template.bind({});
View.args = {
  url: '/',
  children: 'Піца',
};
