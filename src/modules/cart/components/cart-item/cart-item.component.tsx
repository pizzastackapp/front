import { Button } from '@app/common/components/button/button.component';
import { InputNumber } from '@app/common/components/input-number/input-number.component';
import { useCloudinaryImage } from '@app/common/hooks/use-cloudinary-image.hook';
import { AdvancedImage } from '@cloudinary/react';
import { FC } from 'react';

interface CartItemProps {
  image: string;
  title: string;
  count: number;
  price: number;
}

export const CartItem: FC<CartItemProps> = ({ image, title, count, price }) => {
  const imageCld = useCloudinaryImage(image, ['w_128', 'h_128', 'c_fill']);

  return (
    <div className="border-t border-gray-200 pt-6">
      <div className="flex gap-6">
        <AdvancedImage
          cldImg={imageCld}
          width={128}
          height={128}
          className="rounded-md"
        />

        <div className="flex flex-col justify-between w-full">
          <div className="flex flex-col gap-3">
            <span className="font-semibold text-gray-900">{title}</span>
            <span className="text-xs font-medium text-gray-500">
              Ціна: {count} x {price} грн = {count * price} грн
            </span>
          </div>
          <div className="flex items-end gap-6 justify-between">
            <div className="w-24">
              <InputNumber
                label="Кількість"
                size="sm"
                hideErrorMessage
                fullWidth
                value={count}
              />
            </div>
            <Button variant="danger" size="sm">
              Видалити
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
