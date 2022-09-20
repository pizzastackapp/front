import { Header } from '@app/common/components/header/header.component';
import { Footer } from '@app/common/components/footer/footer.component';
import { MenuPage } from '@app/modules/menu/pages/menu.page';
import { useGetCategoriesQuery } from '@app/core/types';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '@app/modules/auth/pages/login.page';

export const App = () => {
  const { data, loading } = useGetCategoriesQuery();

  return (
    <div className="flex flex-col min-h-screen">
      <Header isLoading={loading} categories={data?.categories} />
      <div className="mx-12 my-24">
        <Routes>
          <Route path="/" element={<MenuPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
