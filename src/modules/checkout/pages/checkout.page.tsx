import { useReactiveVar } from '@apollo/client';
import { ActionPaper } from '@app/common/components/action-paper/action-paper.component';
import { Container } from '@app/common/components/container/container.component';
import { useCreateOrderMutation } from '@app/core/types';
import { useGetMeDataQuery } from '@app/modules/auth/hooks/use-get-customer-data-query';
import { CartList } from '@app/modules/cart/components/cart-list/cart-list.component';
import { cartState, cleanCart } from '@app/modules/cart/store/cart-state';
import { CheckoutForm } from '@app/modules/checkout/components/checkout-form/checkout-form.component';
import { CheckoutFormValues } from '@app/modules/checkout/components/checkout-form/checkout-form.types';
import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface CheckoutPageProps {}

export const CheckoutPage: FC<CheckoutPageProps> = () => {
  const cart = useReactiveVar(cartState);
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(cart).length === 0) {
      navigate('/', { replace: true });
    }
  }, [cart]);

  const [createOrderMutation] = useCreateOrderMutation();
  const handleCheckoutSubmit = async (values: CheckoutFormValues) => {
    const items = Object.keys(cart)
      .map((cartId) => {
        return `${cartId}_${cart[cartId]}`;
      })
      .join(',');

    const newOrder = await createOrderMutation({
      variables: {
        client_address: values.address,
        client_name: values.name,
        client_phone: values.phoneNumber,
        items,
        payment_type: values.paymentType,
        comment: values.comment,
      },
    });

    cleanCart();

    if (newOrder.data?.createOrder?.checkout_url) {
      window.location.href = newOrder.data?.createOrder?.checkout_url;
      return;
    }

    navigate('/checkout/thank-you', { replace: true });
  };

  const { data } = useGetMeDataQuery();

  return (
    <Container>
      <ActionPaper title="Замовлення">
        <div className="flex gap-19 flex-col-reverse sm:flex-row">
          <div className="flex-1">
            <CheckoutForm
              submitCallback={handleCheckoutSubmit}
              initialValues={data}
            />
          </div>
          <div className="flex-1">
            <CartList scrollDisabled cartSumItemPosition="top" />
          </div>
        </div>
      </ActionPaper>
    </Container>
  );
};
