import { FC, useRef } from 'react';
import { ReactComponent as XMarkSolidIcon } from '@app/assets/icons/x-mark-solid.svg';
import { ReactComponent as PizzaIcon } from '@app/assets/icons/pizza.svg';
import { Button } from '@app/common/components/button/button.component';
import { useReactiveVar } from '@apollo/client';
import {
  cartOpenedState,
  closeCart,
} from '@app/modules/cart/store/cart-opened-state';
import clsx from 'clsx';
import { useOnClickOutside } from '@app/common/hooks/use-on-click-outside.hook';
import { cartState } from '@app/modules/cart/store/cart-state';
import { CartList } from '@app/modules/cart/components/cart-list/cart-list.component';
import { Link } from 'react-router-dom';

interface CartSidebarProps {}

export const CartSidebar: FC<CartSidebarProps> = () => {
  const isOpened = useReactiveVar(cartOpenedState);
  const cartItems = useReactiveVar(cartState);

  const cartClasses = clsx(
    'w-112 h-[calc(100vh_-_3rem)] p-6 shadow-xl fixed z-10 bg-white right-0 top-12 transition-all hidden sm:block',
    {
      'translate-x-full': !isOpened,
    }
  );

  const cartRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(cartRef, (event) => {
    const path = event.composedPath();
    const isCartButton = path.find(
      // @ts-ignore
      (el) => el.id === 'shopping-cart-item'
    );

    if (!isCartButton && isOpened) {
      closeCart();
    }
  });

  const handleCheckoutClick = () => {
    closeCart();
  };

  return (
    <div className={cartClasses} ref={cartRef}>
      <div className="flex justify-between items-center mb-6">
        <span className="text-lg font-medium text-gray-900">Корзина</span>
        <button onClick={closeCart}>
          <XMarkSolidIcon className="w-3.5 h-3.5 child-path:fill-gray-400" />
        </button>
      </div>
      {Object.keys(cartItems).length === 0 ? (
        <div className="w-full h-[calc(100%_-_3.25rem)] border-2 border-dashed border-gray-200 flex justify-center items-center">
          <div className="flex flex-col items-center">
            <PizzaIcon className="h-24 w-28 child-path:fill-gray-400 mb-6" />
            <span className="text-lg font-medium text-gray-900">
              Корзина пуста
            </span>
          </div>
        </div>
      ) : (
        <CartList
          appendix={
            <>
              <Link to="checkout">
                <Button fullWidth onClick={handleCheckoutClick}>
                  Оформити замовлення
                </Button>
              </Link>
            </>
          }
        />
      )}
    </div>
  );
};
