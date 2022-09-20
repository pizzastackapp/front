import { UserDropdown } from '@app/modules/auth/components/user-dropdown/user-dropdown.component';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Auth/User dropdown',
  component: UserDropdown,
} as ComponentMeta<typeof UserDropdown>;

const Template: ComponentStory<typeof UserDropdown> = (args) => (
  <MemoryRouter>
    <div className="p-4 shadow flex justify-end">
      <UserDropdown {...args} />
    </div>
  </MemoryRouter>
);

export const View = Template.bind({});
View.args = {};
