import { min3Symbols, phoneRegexp } from '@app/common/utils/regex';
import { UpdateInfoFormValues } from '@app/modules/user/components/update-info/update-info.types';
import { FrontCustomer } from '@app/modules/user/types/user';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
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

export const useUpdateInfoForm = (
  initialValues?: FrontCustomer,
  onSubmitCallback?: (values: UpdateInfoFormValues) => Promise<void>
) => {
  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
    reset,
  } = useForm<UpdateInfoFormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      phoneNumber: initialValues?.phone,
      name: initialValues?.name || '',
      address: initialValues?.address || '',
    },
  });

  const submitForm = async (values: UpdateInfoFormValues) => {
    if (onSubmitCallback) {
      try {
        await onSubmitCallback(values);
        toast.success('Дані оновлені!');
      } catch (e) {
        toast.error((e as Error).message);
      }
    }
  };

  const onSubmit = handleSubmit(submitForm);

  return { onSubmit, isSubmitting, control, reset };
};
