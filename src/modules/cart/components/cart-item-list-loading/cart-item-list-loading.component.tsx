import { CartItemLoading } from '@app/modules/cart/components/cart-item-loading/cart-item-loading.component';
import { FC } from 'react';

interface CartItemListLoadingProps {
  amount: number;
}

export const CartItemListLoading: FC<CartItemListLoadingProps> = ({
  amount,
}) => {
  const items = new Array(amount).fill(1);

  return (
    <div className="flex flex-col gap-6">
      {items.map((v, index) => (
        <CartItemLoading key={`cart-item-loading-${index}`} />
      ))}
    </div>
  );
};
