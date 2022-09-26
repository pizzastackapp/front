import { ActionPaperFooter } from '@app/common/components/action-paper-footer/action-paper-footer.component';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Common/Action paper footer',
  component: ActionPaperFooter,
} as ComponentMeta<typeof ActionPaperFooter>;

const Template: ComponentStory<typeof ActionPaperFooter> = (args) => (
  <ActionPaperFooter {...args} />
);

export const View = Template.bind({});
View.args = {
  children: <button>123</button>,
};
