import { MenuCategoryLoading } from '@app/modules/menu/components/menu-category-loading/menu-category-loading.components copy';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Menu/Menu Category Loading',
  component: MenuCategoryLoading,
} as ComponentMeta<typeof MenuCategoryLoading>;

const Template: ComponentStory<typeof MenuCategoryLoading> = () => (
  <div className="flex">
    <MenuCategoryLoading />
  </div>
);

export const View = Template.bind({});
