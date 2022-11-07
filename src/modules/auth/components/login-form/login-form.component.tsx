import { Button } from '@app/common/components/button/button.component';
import { Input } from '@app/common/components/input/input.component';
import { FC, useState } from 'react';
import { Controller } from 'react-hook-form';
import { Counter } from '@app/common/components/counter/counter.component';
import { toast } from 'react-toastify';
import {
  LoginFormProps,
  LoginFormStep,
  LoginFormStepKeys,
} from '@app/modules/auth/components/login-form/login-form.types';
import { useLoginForm } from '@app/modules/auth/components/login-form/use-login-form';

export const LoginForm: FC<LoginFormProps> = ({
  onFirstStepCallback,
  onSecondStepCallback,
}) => {
  const [step, setStep] = useState<LoginFormStepKeys>(LoginFormStep.first);
  const { getValues, onSubmit, control, isSubmitting } = useLoginForm(
    step,
    setStep,
    onFirstStepCallback,
    onSecondStepCallback
  );

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
    <div className="max-w-112 py-8 px-10 bg-white rounded-lg shadow mx-auto">
      <form onSubmit={onSubmit}>
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
                type="tel"
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
              <Counter onRestart={onResend}>Відправити код ще раз</Counter>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};
