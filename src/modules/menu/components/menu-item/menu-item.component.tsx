import { FC } from 'react';
import { AdvancedImage } from '@cloudinary/react';
import clsx from 'clsx';
import { useCloudinaryImage } from '@app/common/hooks/use-cloudinary-image.hook';
import { Button } from '@app/common/components/button/button.component';
import { addItemToCart } from '@app/modules/cart/store/cart-state';

interface MenuItemProps {
  image: string;
  weight?: number;
  title: string;
  ingredients?: string | null;
  price: number;
  fitImage?: boolean;
  pizzaId: string;
}

export const MenuItem: FC<MenuItemProps> = ({
  image,
  weight,
  title,
  ingredients,
  price,
  fitImage = false,
  pizzaId,
}) => {
  const transfomations = ['w_384', 'h_240'];
  if (fitImage) {
    transfomations.unshift('c_pad');
  }

  const imageCld = useCloudinaryImage(image, transfomations);

  const titleClasses = clsx('text-xl font-semibold', {
    'mb-2': ingredients,
    'mb-8': !ingredients,
  });

  const handleAddToCart = () => {
    addItemToCart(pizzaId);
  };

  return (
    <div className="w-96 shadow-xl rounded-2xl bg-white">
      <div className="relative">
        <AdvancedImage
          cldImg={imageCld}
          width={384}
          height={240}
          className="rounded-t-2xl"
        />
        {weight && (
          <span className="absolute bottom-1.5 right-3 bg-gray-900/50 text-white text-sm px-2 rounded-[2rem]">
            {weight} г
          </span>
        )}
      </div>
      <div className="p-8">
        <h2 className={titleClasses}>{title}</h2>
        {ingredients && <p className="mb-8">{ingredients}</p>}
        <div className="flex justify-between items-center">
          <span className="text-xl font-semibold">{price} грн.</span>
          <Button onClick={handleAddToCart}>Додати до корзини</Button>
        </div>
      </div>
    </div>
  );
};
