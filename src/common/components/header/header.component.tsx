import { Button } from '@app/common/components/button/button.component';
import { HeaderCategoryLink } from '@app/common/components/link/link.component';
import { Skeleton } from '@app/common/components/skeleton/skeleton.component';
import { Categories } from '@app/core/types';
import { UserDropdown } from '@app/modules/auth/components/user-dropdown/user-dropdown.component';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  isLoading?: boolean;
  categories?: Omit<Categories, 'menu_items' | 'menu_items_aggregate'>[];
  isLoggedin?: boolean;
}

export const Header: FC<HeaderProps> = ({
  isLoading,
  categories,
  isLoggedin,
}) => {
  return (
    <div className="h-12 shadow px-6 mb-12 fixed w-full z-10 bg-white flex justify-between items-center">
      <div className="flex items-center h-full gap-3">
        <a href="/" className="text-xl font-semibold">
          🍕 PizzaStack
        </a>
        <div className="h-full w-px bg-gray-200 h-6" />
        {isLoading ? (
          <>
            <Skeleton width={34} height={19} />
            <Skeleton width={34} height={19} />
            <Skeleton width={34} height={19} />
            <Skeleton width={34} height={19} />
          </>
        ) : (
          <>
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
      </div>
      <div>
        {isLoggedin ? (
          <UserDropdown />
        ) : (
          <Link to="/login">
            <Button size="sm">Війти</Button>
          </Link>
        )}
      </div>
    </div>
  );
};
