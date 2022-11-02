import { Header } from '@app/common/components/header/header.component';
import { Footer } from '@app/common/components/footer/footer.component';
import { MenuPage } from '@app/modules/menu/pages/menu.page';
import { useGetCategoriesQuery } from '@app/core/types';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '@app/modules/auth/pages/login.page';
import { ProfilePage } from '@app/modules/user/pages/profile.page';
import { PrivateRoute } from '@app/common/components/private-route/private-route.component';
import { CartSidebar } from '@app/modules/cart/components/cart-sidebar/cart-sidebar.component';
import { CheckoutPage } from '@app/modules/checkout/pages/checkout.page';
import { ThankYouPage } from '@app/modules/checkout/pages/thank-you.page';
import { useAuthState } from '@app/modules/auth/hooks/use-auth-state';

export const App = () => {
  const { data, loading } = useGetCategoriesQuery();
  useAuthState();

  return (
    <div className="flex flex-col min-h-screen">
      <Header isLoading={loading} categories={data?.categories} />
      <CartSidebar />
      <div className="mx-6 sm:mx-12 my-20 sm:my-24">
        <Routes>
          <Route path="/" element={<MenuPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/checkout/thank-you" element={<ThankYouPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
