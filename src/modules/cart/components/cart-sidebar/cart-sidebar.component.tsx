import { FC } from 'react';
import { ReactComponent as XMarkSolidIcon } from '@app/assets/icons/x-mark-solid.svg';
import { ReactComponent as PizzaIcon } from '@app/assets/icons/pizza.svg';

interface CartSidebarProps {}

export const CartSidebar: FC<CartSidebarProps> = () => {
  return (
    <div className="w-112 h-screen p-6 shadow-xl">
      <div className="flex justify-between items-center mb-6">
        <span className="text-lg font-medium text-gray-900">Корзина</span>
        <button>
          <XMarkSolidIcon className="w-3.5 h-3.5 child-path:fill-gray-400" />
        </button>
      </div>
      <div className="w-full h-[calc(100%_-_3.25rem)] border-2 border-dashed border-gray-200 flex justify-center items-center">
        <div className="flex flex-col items-center">
          <PizzaIcon className="h-24 w-28 child-path:fill-gray-400 mb-6" />
          <span className="text-lg font-medium text-gray-900">
            Корзина пуста
          </span>
        </div>
      </div>
    </div>
  );
};
