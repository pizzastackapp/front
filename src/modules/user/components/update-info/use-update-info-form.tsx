import { min3Symbols, phoneRegexp } from '@app/common/utils/regex';
import { UpdateInfoFormValues } from '@app/modules/user/components/update-info/update-info.types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const validationSchema = yup.object({
  phoneNumber: yup
    .string()
    .trim()
    .matches(phoneRegexp, 'Введіть коректний номер телефону')
    .required('Введіть номер телефону'),
  name: yup.string().matches(min3Symbols, {
    excludeEmptyString: true,
    message: 'Введіть мінімум 3 символи!',
  }),
  address: yup.string().matches(min3Symbols, {
    excludeEmptyString: true,
    message: 'Введіть мінімум 3 символи!',
  }),
});

export const useUpdateInfoForm = () => {
  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm<UpdateInfoFormValues>({
    resolver: yupResolver(validationSchema),
  });

  const submitForm = (values: UpdateInfoFormValues) => {
    alert(JSON.stringify(values));
  };

  const onSubmit = handleSubmit(submitForm);

  return { onSubmit, isSubmitting, control };
};
