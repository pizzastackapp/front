import { MenuItemLoading } from '@app/modules/menu/components/menu-item-loading/menu-item-loading.component';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Menu/Menu Item Loading',
  component: MenuItemLoading,
} as ComponentMeta<typeof MenuItemLoading>;

const Template: ComponentStory<typeof MenuItemLoading> = () => (
  <div className="flex">
    <MenuItemLoading />
  </div>
);

export const View = Template.bind({});
