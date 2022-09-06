import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Link } from './link.component';

export default {
  title: 'Common/Link',
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const View = Template.bind({});
View.args = {
  url: '/',
  children: 'Піца',
};
