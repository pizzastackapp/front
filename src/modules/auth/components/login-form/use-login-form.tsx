import { phoneRegexp } from '@app/common/utils/regex';
import {
  LoginFormStep,
  LoginFormStepKeys,
  LoginFormValues,
} from '@app/modules/auth/components/login-form/login-form.types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';

const generateValidationSchema = (step: LoginFormStepKeys) => {
  const baseValidation = {
    phoneNumber: yup
      .string()
      .trim()
      .matches(phoneRegexp, 'Введіть коректний номер телефону')
      .required('Введіть номер телефону'),
  };

  if (step === LoginFormStep.first) {
    return yup.object(baseValidation);
  }

  return yup.object({
    ...baseValidation,
    code: yup.string().required('Введіть код'),
  });
};

export const useLoginForm = (
  step: LoginFormStepKeys,
  setStep: (step: LoginFormStepKeys) => void,
  firstStepCallback?: (phoneNumber: string) => Promise<void>,
  secondStepCallback?: (phoneNumber: string, code: string) => Promise<void>
) => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
    getValues,
  } = useForm<LoginFormValues>({
    resolver: yupResolver(generateValidationSchema(step)),
    defaultValues: {
      phoneNumber: '',
      code: '',
    },
  });

  const submitForm = async (values: LoginFormValues) => {
    try {
      if (step === LoginFormStep.first) {
        if (firstStepCallback !== undefined) {
          await firstStepCallback(values.phoneNumber);
        }

        setStep(LoginFormStep.second);
        return;
      }

      if (secondStepCallback !== undefined) {
        await secondStepCallback(values.phoneNumber, values.code);
      }
    } catch (e) {
      toast.error((e as Error).message);
    }
  };

  const onSubmit = handleSubmit(submitForm);

  return { getValues, onSubmit, control, isSubmitting };
};
