import { ActionPaperFooter } from '@app/common/components/action-paper-footer/action-paper-footer.component';
import { ActionPaper } from '@app/common/components/action-paper/action-paper.component';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Common/Action paper',
  component: ActionPaper,
} as ComponentMeta<typeof ActionPaper>;

const Template: ComponentStory<typeof ActionPaper> = (args) => (
  <ActionPaper {...args} />
);

export const View = Template.bind({});
View.args = {
  title: 'Персональні дані',
  children: <button>123</button>,
};

export const WithFooter = Template.bind({});
View.args = {
  title: 'Персональні дані',
  children: <button>123</button>,
  footer: (
    <ActionPaperFooter>
      <button>123</button>
    </ActionPaperFooter>
  ),
};
