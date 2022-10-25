import { Button } from '@app/common/components/button/button.component';
import { Input } from '@app/common/components/input/input.component';
import { RadioGroup } from '@app/common/components/radio-group/radio-group.component';
import { TextArea } from '@app/common/components/text-area/text-area.component';
import { Payment_Types_Enum } from '@app/core/types';
import { CheckoutFormProps } from '@app/modules/checkout/components/checkout-form/checkout-form.types';
import { useCheckoutForm } from '@app/modules/checkout/components/checkout-form/use-checkout-form';
import { FC, useEffect } from 'react';
import { Controller } from 'react-hook-form';

const paymentTypeOptions = [
  { label: 'Готівка', value: Payment_Types_Enum.Cash },
  { label: 'Картка', value: Payment_Types_Enum.Card },
  { label: 'Онлайн', value: Payment_Types_Enum.Online },
];

export const CheckoutForm: FC<CheckoutFormProps> = ({
  submitCallback,
  initialValues,
}) => {
  const { control, onSubmit, reset } = useCheckoutForm({
    callback: submitCallback,
  });
  useEffect(() => {
    reset({
      name: initialValues?.name ?? '',
      address: initialValues?.address ?? '',
      phoneNumber: initialValues?.phone ?? '',
    });
  }, [initialValues]);

  return (
    <form className="flex flex-col gap-2" onSubmit={onSubmit}>
      <Controller
        name="name"
        control={control}
        render={({ field, fieldState }) => (
          <Input
            {...field}
            fullWidth
            label="Імʼя"
            placeholder="Введіть ваше імʼя"
            error={fieldState.error?.message}
          />
        )}
      />
      <Controller
        name="phoneNumber"
        control={control}
        render={({ field, fieldState }) => (
          <Input
            {...field}
            fullWidth
            label="Телефон"
            placeholder="Введіть ваш телефон"
            error={fieldState.error?.message}
          />
        )}
      />
      <Controller
        name="address"
        control={control}
        render={({ field, fieldState }) => (
          <Input
            {...field}
            fullWidth
            label="Адреса"
            placeholder="Введіть вашу адресу"
            error={fieldState.error?.message}
          />
        )}
      />
      <Controller
        name="comment"
        control={control}
        render={({ field }) => (
          <TextArea
            {...field}
            fullWidth
            label="Коментарій"
            placeholder="Введіть будь-яку корисну інформацію"
          />
        )}
      />
      <Controller
        name="paymentType"
        control={control}
        render={({ field }) => (
          <RadioGroup
            label="Форма оплати"
            options={paymentTypeOptions}
            {...field}
          />
        )}
      />
      <Button type="submit" fullWidth>
        Підтвердити замовлення
      </Button>
    </form>
  );
};
