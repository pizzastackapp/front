import { Button } from '@app/common/components/button/button.component';
import { HeaderCategoryLink } from '@app/common/components/link/link.component';
import { Skeleton } from '@app/common/components/skeleton/skeleton.component';
import { Categories } from '@app/core/types';
import { UserDropdown } from '@app/modules/auth/components/user-dropdown/user-dropdown.component';
import { FC, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as ShoppingCartSolidIcon } from '@app/assets/icons/shopping-cart-solid.svg';
import { toggleCart } from '@app/modules/cart/store/cart-opened-state';
import { ReactComponent as Bars3Icon } from '@app/assets/icons/bars-3.svg';
import clsx from 'clsx';
import { useAuthState } from '@app/modules/auth/hooks/use-auth-state';

interface HeaderProps {
  isLoading?: boolean;
  categories?: Omit<Categories, 'menu_items' | 'menu_items_aggregate'>[];
}

export const Header: FC<HeaderProps> = ({ isLoading, categories }) => {
  const { isLoggedin, logout } = useAuthState();

  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isLoginPage = location.pathname === '/login';
  const isCheckoutPage = location.pathname === '/checkout';

  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const toggleMenuOpened = () => setIsMenuOpened((v) => !v);
  const closeMenu = () => setIsMenuOpened(false);
  const mobileMenuClasses = clsx(
    'bg-white z-10 fixed w-full mt-12 h-full p-4 sm:hidden',
    {
      hidden: !isMenuOpened,
      block: isMenuOpened,
    }
  );

  const handleLogout = () => {
    closeMenu();
    logout();
  };

  return (
    <>
      <div className="h-12 shadow px-6 mb-6 sm:mb-12 fixed w-full z-20 bg-white flex justify-between items-center">
        <div className="flex items-center h-full gap-3 flex-1">
          <Link to="/" className="text-lg font-semibold sm:text-xl">
            🍕 PizzaStack
          </Link>
          {isLoading ? (
            <>
              <div className="w-px bg-gray-200 h-6" />
              <Skeleton width={34} height={19} />
              <Skeleton width={34} height={19} />
              <Skeleton width={34} height={19} />
            </>
          ) : (
            <>
              {isHomePage && (
                <div className="flex gap-3 items-center flex-1">
                  <div className="w-px bg-gray-200 h-6" />
                  {categories?.map((category) => (
                    <HeaderCategoryLink
                      url={`#${category.slug}`}
                      key={`header-category-${category.id}`}
                    >
                      {category.title}
                    </HeaderCategoryLink>
                  ))}
                </div>
              )}
              <button className="ml-auto sm:hidden" onClick={toggleMenuOpened}>
                <Bars3Icon />
              </button>
            </>
          )}
        </div>
        <div className="hidden items-center gap-3 sm:flex">
          {!isCheckoutPage && (
            <button onClick={toggleCart} id="shopping-cart-item">
              <ShoppingCartSolidIcon className="w-6 h-6 child-path:fill-gray-900" />
            </button>
          )}
          {isLoggedin ? (
            <UserDropdown />
          ) : (
            !isLoginPage && (
              <Link to="/login">
                <Button size="sm">Війти</Button>
              </Link>
            )
          )}
        </div>
      </div>
      <div className={mobileMenuClasses}>
        <ul>
          <li>
            <Link
              to="/checkout"
              onClick={closeMenu}
              className="border-b w-full block py-2"
            >
              До корзини
            </Link>
          </li>
          {isLoggedin ? (
            <>
              <li>
                <Link
                  to="/profile"
                  onClick={closeMenu}
                  className="border-b w-full block py-2"
                >
                  Ваш профіль
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={handleLogout}
                  className="border-b w-full block py-2"
                >
                  Вийти
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link
                to="/login"
                onClick={closeMenu}
                className="border-b w-full block py-2"
              >
                Війти
              </Link>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};
