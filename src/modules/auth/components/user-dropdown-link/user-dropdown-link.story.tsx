import { UserDropdownLink } from '@app/modules/auth/components/user-dropdown-link/user-dropdown-link.component';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Auth/User dropdown link',
  component: UserDropdownLink,
} as ComponentMeta<typeof UserDropdownLink>;

const Template: ComponentStory<typeof UserDropdownLink> = (args) => (
  <MemoryRouter>
    <UserDropdownLink {...args} />
  </MemoryRouter>
);

export const View = Template.bind({});
View.args = {
  children: 'Ваш профіль',
};
