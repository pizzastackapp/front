import { useReactiveVar } from '@apollo/client';
import { Button } from '@app/common/components/button/button.component';
import { HeaderCategoryLink } from '@app/common/components/link/link.component';
import { Skeleton } from '@app/common/components/skeleton/skeleton.component';
import { Categories } from '@app/core/types';
import { UserDropdown } from '@app/modules/auth/components/user-dropdown/user-dropdown.component';
import { isLoggedInReactive } from '@app/modules/auth/store/reactive-vars';
import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as ShoppingCartSolidIcon } from '@app/assets/icons/shopping-cart-solid.svg';
import { toggleCart } from '@app/modules/cart/store/cart-opened-state';

interface HeaderProps {
  isLoading?: boolean;
  categories?: Omit<Categories, 'menu_items' | 'menu_items_aggregate'>[];
}

export const Header: FC<HeaderProps> = ({ isLoading, categories }) => {
  const isLoggedin = useReactiveVar(isLoggedInReactive);

  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="h-12 shadow px-6 mb-12 fixed w-full z-20 bg-white flex justify-between items-center">
      <div className="flex items-center h-full gap-3">
        <Link to="/" className="text-xl font-semibold">
          🍕 PizzaStack
        </Link>
        {isLoading ? (
          <>
            <div className="w-px bg-gray-200 h-6" />
            <Skeleton width={34} height={19} />
            <Skeleton width={34} height={19} />
            <Skeleton width={34} height={19} />
            <Skeleton width={34} height={19} />
          </>
        ) : (
          <>
            {isHomePage && (
              <>
                <div className="w-px bg-gray-200 h-6" />
                {categories?.map((category) => (
                  <HeaderCategoryLink
                    url={`#${category.slug}`}
                    key={`header-category-${category.id}`}
                  >
                    {category.title}
                  </HeaderCategoryLink>
                ))}
              </>
            )}
          </>
        )}
      </div>
      <div className="flex items-center gap-3">
        <button onClick={toggleCart}>
          <ShoppingCartSolidIcon className="w-6 h-6 child-path:fill-gray-900" />
        </button>
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
  );
};
