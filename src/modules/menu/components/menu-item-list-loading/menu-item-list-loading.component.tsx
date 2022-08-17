import { MenuItemLoading } from '@app/modules/menu/components/menu-item-loading/menu-item-loading.component';
import { FC } from 'react';

interface MenuListLoadingProps {
  items: number;
}

export const MenuListLoading: FC<MenuListLoadingProps> = ({ items }) => {
  return (
    <div className="flex flex-wrap gap-10 justify-center">
      {new Array(items).fill(1).map((v, ind) => {
        return <MenuItemLoading key={`menu-loading-${ind}`} />;
      })}
    </div>
  );
};
