import { FC } from 'react';
import { ReactComponent as XMarkSolidIcon } from '@app/assets/icons/x-mark-solid.svg';
import { ReactComponent as PizzaIcon } from '@app/assets/icons/pizza.svg';
import { CartItem } from '@app/modules/cart/components/cart-item/cart-item.component';
import { Button } from '@app/common/components/button/button.component';

interface CartSidebarProps {
  items: any[];
}

export const CartSidebar: FC<CartSidebarProps> = ({ items }) => {
  return (
    <div className="w-112 h-[calc(100vh_-_3rem)] p-6 shadow-xl fixed z-10 bg-white right-0 top-12">
      <div className="flex justify-between items-center mb-6">
        <span className="text-lg font-medium text-gray-900">Корзина</span>
        <button>
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
