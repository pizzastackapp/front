import { validateApolloResponse } from '@app/common/utils/validate-apollo-response';
import {
  useCustomerLoginLazyQuery,
  useCustomerVerifyCodeLazyQuery,
} from '@app/core/types';
import { LoginForm } from '@app/modules/auth/components/login-form/login-form.component';

export const LoginPage = () => {
  const [sendPhoneNumber] = useCustomerLoginLazyQuery({
    fetchPolicy: 'network-only',
  });
  const [sendPhoneWithCode] = useCustomerVerifyCodeLazyQuery({
    fetchPolicy: 'network-only',
  });

  const onFirstStepCallback = async (phoneNumber: string) => {
    const queryResult = await sendPhoneNumber({ variables: { phoneNumber } });

    validateApolloResponse(queryResult);
  };

  const onSecondStepCallback = async (phoneNumber: string, code: string) => {
    const queryResult = await sendPhoneWithCode({
      variables: { phoneNumber, code },
    });

    validateApolloResponse(queryResult);

    if (queryResult.data?.customerVerifyCode?.accessToken) {
      localStorage.setItem(
        'jwt',
        queryResult.data?.customerVerifyCode?.accessToken
      );
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-12">
        Увійти до вашого кабінету 🍕 PizzaStack
      </h1>
      <LoginForm
        onFirstStepCallback={onFirstStepCallback}
        onSecondStepCallback={onSecondStepCallback}
      />
    </div>
  );
};
