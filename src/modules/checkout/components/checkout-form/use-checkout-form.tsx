import { phoneRegexp } from '@app/common/utils/regex';
import {
  CheckoutFormValues,
  UseCheckoutFormOptions,
} from '@app/modules/checkout/components/checkout-form/checkout-form.types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const validation = yup.object({
  name: yup.string().required('Поле обовʼязкове!'),
  phoneNumber: yup
    .string()
    .trim()
    .matches(phoneRegexp, 'Введіть коректний номер телефону')
    .required('Введіть номер телефону'),
  address: yup.string().required('Поле обовʼязкове!'),
  comment: yup.string().notRequired(),
  paymentType: yup.string().oneOf(['card', 'cash']),
});

export const useCheckoutForm = (options?: UseCheckoutFormOptions) => {
  const { control, handleSubmit } = useForm<CheckoutFormValues>({
    resolver: yupResolver(validation),
    defaultValues: {
      name: '',
      phoneNumber: '',
      address: '',
      comment: '',
      paymentType: 'cash',
    },
  });

  const submitForm = async (values: CheckoutFormValues) => {
    if (options?.callback) {
      await options.callback(values);
    }
  };

  const onSubmit = handleSubmit(submitForm);

  return { control, onSubmit };
};
