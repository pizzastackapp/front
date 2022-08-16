import { useGetMenuQuery } from '@app/core/types';
import { MenuList } from '@app/modules/menu/components/menu-list/menu-list.component';

export const MenuPage = () => {
  const { data, loading, error } = useGetMenuQuery();

  if (error) {
    return <h1>Упс, сталася помилка 🥲</h1>;
  }

  if (!data && loading) {
    return <h1>Буль ласка, зачекайте...</h1>;
  }

  if (!data) {
    return <h1>Надаль, меню пусте нухз ☹️</h1>;
  }

  return <MenuList items={data.menu} />;
};
