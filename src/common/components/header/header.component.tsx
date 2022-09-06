import { Link } from '@app/common/components/link/link.component';
import { Skeleton } from '@app/common/components/skeleton/skeleton.component';
import { Categories } from '@app/core/types';
import { FC } from 'react';

interface HeaderProps {
  isLoading?: boolean;
  categories?: Omit<Categories, 'menu_items'>[];
}

export const Header: FC<HeaderProps> = ({ isLoading, categories }) => {
  return (
    <div className="h-12 shadow-xl px-6 mb-12 fixed w-full z-10 bg-white">
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
              <Link
                url={`#${category.slug}`}
                key={`header-category-${category.id}`}
              >
                {category.title}
              </Link>
            ))}
          </>
        )}
      </div>
    </div>
  );
};
