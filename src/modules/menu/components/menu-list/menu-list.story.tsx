import { MenuList } from '@app/modules/menu/components/menu-list/menu-list.component';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Menu/Menu List',
  component: MenuList,
} as ComponentMeta<typeof MenuList>;

const Template: ComponentStory<typeof MenuList> = () => <MenuList />;

export const View = Template.bind({});
