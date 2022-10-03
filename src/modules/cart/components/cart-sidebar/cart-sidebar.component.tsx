import { FC, useRef } from 'react';
import { ReactComponent as XMarkSolidIcon } from '@app/assets/icons/x-mark-solid.svg';
import { ReactComponent as PizzaIcon } from '@app/assets/icons/pizza.svg';
import { CartItem } from '@app/modules/cart/components/cart-item/cart-item.component';
import { Button } from '@app/common/components/button/button.component';
import { useReactiveVar } from '@apollo/client';
import {
  cartOpenedState,
  closeCart,
} from '@app/modules/cart/store/cart-opened-state';
import clsx from 'clsx';
import { useOnClickOutside } from '@app/common/hooks/use-on-click-outside.hook';
import { cartState } from '@app/modules/cart/store/cart-state';

interface CartSidebarProps {
  items: any[];
}

export const CartSidebar: FC<CartSidebarProps> = ({ items }) => {
  const isOpened = useReactiveVar(cartOpenedState);
  const cartItems = useReactiveVar(cartState);
  console.log(
    '🚀 ~ file: cart-sidebar.component.tsx ~ line 22 ~ cartItems',
    cartItems
  );

  const cartClasses = clsx(
    'w-112 h-[calc(100vh_-_3rem)] p-6 shadow-xl fixed z-10 bg-white right-0 top-12 transition-all',
    {
      'translate-x-full': !isOpened,
    }
  );

  const cartRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(cartRef, () => {
    if (isOpened) {
      closeCart();
    }
  });

  return (
    <div className={cartClasses} ref={cartRef}>
      <div className="flex justify-between items-center mb-6">
        <span className="text-lg font-medium text-gray-900">Корзина</span>
        <button onClick={closeCart}>
          <XMarkSolidIcon className="w-3.5 h-3.5 child-path:fill-gray-400" />
        </button>
      </div>
      {items.length === 0 ? (
        <div className="w-full h-[calc(100%_-_3.25rem)] border-2 border-dashed border-gray-200 flex justify-center items-center">
          <div className="flex flex-col items-center">
            <PizzaIcon className="h-24 w-28 child-path:fill-gray-400 mb-6" />
            <span className="text-lg font-medium text-gray-900">
              Корзина пуста
            </span>
          </div>
        </div>
      ) : (
        <div className="flex gap-6 flex-col h-[calc(100%_-_3.25rem)]">
          <div className="flex gap-6 flex-col overflow-y-auto">
            {items.map((item) => (
              <CartItem {...item} />
            ))}
          </div>
          <div className="border-t border-gray-200 pt-6 text-right text-sm font-medium text-gray-900">
            Усього: 1488 грн
          </div>
          <Button>Оформити замовлення</Button>
        </div>
      )}
    </div>
  );
};
