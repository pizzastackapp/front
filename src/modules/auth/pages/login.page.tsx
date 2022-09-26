import { validateApolloResponse } from '@app/common/utils/validate-apollo-response';
import {
  useCustomerLoginLazyQuery,
  useCustomerVerifyCodeLazyQuery,
} from '@app/core/types';
import { LoginForm } from '@app/modules/auth/components/login-form/login-form.component';
import { isLoggedInReactive } from '@app/modules/auth/store/reactive-vars';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const navigate = useNavigate();

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

      isLoggedInReactive(true);

      navigate('/');
    }
  };

  return (
    <>
      <Helmet>
        <title>Вхід</title>
      </Helmet>
      <div>
        <h1 className="text-3xl font-bold text-center mb-12">
          Увійти до вашого кабінету 🍕 PizzaStack
        </h1>
        <LoginForm
          onFirstStepCallback={onFirstStepCallback}
          onSecondStepCallback={onSecondStepCallback}
        />
      </div>
    </>
  );
};
