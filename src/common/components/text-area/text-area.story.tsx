import { TextArea } from '@app/common/components/text-area/text-area.component';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Form/Text Area',
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

export const View = Template.bind({});
View.args = {
  label: 'Деталі замовлення',
  placeholder: 'Введіть будь-яку корисну інформацію',
};
