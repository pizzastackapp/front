import { Header } from '@app/common/components/header/header.component';
import { Footer } from '@app/common/components/footer/footer.component';
import { MenuPage } from '@app/modules/menu/pages/menu.page';

export const App = () => {
  return (
    <div>
      <Header />
      <div className="mx-12 mb-24">
        <MenuPage />
      </div>
      <Footer />
    </div>
  );
};
