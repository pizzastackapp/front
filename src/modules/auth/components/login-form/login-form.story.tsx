import { LoginForm } from '@app/modules/auth/components/login-form/login-form.component';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Auth/Login form',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
);

export const View = Template.bind({});
View.args = {};
