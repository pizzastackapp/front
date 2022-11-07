import { Button } from '@app/common/components/button/button.component';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Common/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const View = Template.bind({});
View.args = {
  children: 'Увійти',
};
