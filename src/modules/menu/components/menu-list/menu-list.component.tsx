import { Menu, useGetSettingsQuery } from '@app/core/types';
import { MenuItem } from '@app/modules/menu/components/menu-item/menu-item.component';
import { FC } from 'react';

interface MenuListProps {
  items: Menu[];
}

export const MenuList: FC<MenuListProps> = ({ items }) => {
  const { data: settings } = useGetSettingsQuery({ fetchPolicy: 'cache-only' });

  return (
    <div className="flex flex-wrap gap-10 justify-center">
      {items.map(({ image, ...pizza }) => (
        <MenuItem
          {...pizza}
          image={image}
          key={`pizza-${pizza.id}`}
          fitImage={pizza.category_id === settings?.settings[0].drinks_category}
          pizzaId={pizza.id}
        />
      ))}
    </div>
  );
};
