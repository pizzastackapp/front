import { CartItemListLoading } from '@app/modules/cart/components/cart-item-list-loading/cart-item-list-loading.component';
import { CartItem } from '@app/modules/cart/components/cart-item/cart-item.component';
import { useCartItems } from '@app/modules/checkout/hooks/use-cart-items';
import clsx from 'clsx';
import { FC, ReactNode } from 'react';

enum CartSumItemPosition {
  top = 'top',
  bottom = 'bottom',
}

interface CartListProps {
  appendix?: ReactNode;
  scrollDisabled?: boolean;
  cartSumItemPosition?: keyof typeof CartSumItemPosition;
}

export const CartList: FC<CartListProps> = ({
  appendix,
  scrollDisabled = false,
  cartSumItemPosition = CartSumItemPosition.bottom,
}) => {
  const { data, previousData, loading, cartItems } = useCartItems();

  if (!data && !previousData && loading) {
    return <CartItemListLoading amount={2} />;
  }

  const wrapperClasses = clsx('flex gap-6 flex-col', {
    'h-[calc(100%_-_3.25rem)]': !scrollDisabled,
  });

  const listWrapperClasses = clsx('flex gap-6 flex-col', {
    'overflow-y-auto': !scrollDisabled,
  });

  const cartSumItemClasses = clsx(
    'text-right text-sm font-medium text-gray-900',
    {
      'border-t border-gray-200 pt-6':
        cartSumItemPosition === CartSumItemPosition.bottom,
    }
  );

  const cartSum =
    data?.menu.reduce((acc, val) => {
      return acc + val.price * cartItems[val.id];
    }, 0) ?? 0;

  const cartSumItem = (
    <div className={cartSumItemClasses}>Усього: {cartSum} грн</div>
  );

  return (
    <div className={wrapperClasses}>
      {cartSumItemPosition === CartSumItemPosition.top && cartSumItem}
      <div className={listWrapperClasses}>
        {(data || previousData)?.menu.map((item) => (
          <CartItem
            {...item}
            count={cartItems[item.id]}
            menuItemId={item.id}
            key={`cart-item-${item.id}`}
          />
        ))}
      </div>
      {cartSumItemPosition === CartSumItemPosition.bottom && cartSumItem}
      {appendix}
    </div>
  );
};
