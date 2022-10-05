import { CheckoutForm } from '@app/modules/checkout/components/checkout-form/checkout-form.component';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Checkout/Form',
  component: CheckoutForm,
} as ComponentMeta<typeof CheckoutForm>;

const Template: ComponentStory<typeof CheckoutForm> = (args) => (
  <CheckoutForm {...args} />
);

export const View = Template.bind({});
