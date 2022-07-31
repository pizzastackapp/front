import { Header } from '@app/common/components/header/header.component';
import { MenuList } from '@app/modules/menu/components/menu-list/menu-list.component';
import pizzaMenu from '@app/mocks/pizza.json';
import { Footer } from '@app/common/components/footer/footer.component';

export const App = () => {
  return (
    <div>
      <Header />
      <div className="mx-12 mb-24">
        <MenuList items={pizzaMenu} />
      </div>
      <Footer />
    </div>
  );
};
