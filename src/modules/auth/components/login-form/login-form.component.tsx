import { Button } from '@app/common/components/button/button.component';
import { Input } from '@app/common/components/input/input.component';
import { FC, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Counter } from '@app/common/components/counter/counter.component';
import { phoneRegexp } from '@app/common/utils/regex';
import { toast } from 'react-toastify';

interface LoginFormProps {
  onFirstStepCallback?: (phoneNumber: string) => Promise<void>;
  onSecondStepCallback?: (phoneNumber: string, code: string) => Promise<void>;
}

interface LoginFormValues {
  phoneNumber: string;
  code: string;
}

enum LoginFormStep {
  first = 'first',
  second = 'second',
}

type LoginFormStepKeys = keyof typeof LoginFormStep;

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

export const LoginForm: FC<LoginFormProps> = ({
  onFirstStepCallback,
  onSecondStepCallback,
}) => {
  const [step, setStep] = useState<LoginFormStepKeys>(LoginFormStep.first);

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
        if (onFirstStepCallback !== undefined) {
          await onFirstStepCallback(values.phoneNumber);
        }

        setStep(LoginFormStep.second);
        return;
      }

      if (onSecondStepCallback !== undefined) {
        await onSecondStepCallback(values.phoneNumber, values.code);
      }
    } catch (e) {
      toast.error((e as Error).message);
    }
  };

  const onResend = async () => {
    const phoneNumber = getValues('phoneNumber');

    if (onFirstStepCallback) {
      try {
        await onFirstStepCallback(phoneNumber);
      } catch (e) {
        toast.error((e as Error).message);
      }
    }
  };

  return (
    <div className="w-112 py-8 px-10 bg-white rounded-lg shadow mx-auto">
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="flex gap-2 flex-col">
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field, fieldState }) => (
              <Input
                label="Телефон"
                placeholder="+380671111111"
                fullWidth
                error={fieldState.error?.message}
                disabled={step === LoginFormStep.second}
                {...field}
              />
            )}
          />
          {step === LoginFormStep.second && (
            <Controller
              name="code"
              control={control}
              render={({ field, fieldState }) => (
                <Input
                  label="Код"
                  placeholder="Введіть код з SMS"
                  fullWidth
                  error={fieldState.error?.message}
                  {...field}
                />
              )}
            />
          )}
          <div className="text-center">
            <Button type="submit" disabled={isSubmitting}>
              {step === LoginFormStep.first ? 'Отримати код' : 'Війти'}
            </Button>
          </div>
          {step === LoginFormStep.second && (
            <div>
              <Counter intervalTime={10} onRestart={onResend}>
                Відправити код ще раз
              </Counter>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};
