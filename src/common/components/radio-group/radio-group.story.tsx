import { RadioGroup } from '@app/common/components/radio-group/radio-group.component';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Controller, useForm } from 'react-hook-form';

export default {
  title: 'Form/Radio group',
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args) => (
  <RadioGroup {...args} />
);

export const View = Template.bind({});
View.args = {
  options: [
    { label: 'Готівка', value: 'cash' },
    { label: 'Картка', value: 'card' },
  ],
};

const YupTemplate: ComponentStory<typeof RadioGroup> = (args) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      paymentType: 'cash',
    },
  });

  const onSubmit = (values: any) => {
    alert(JSON.stringify(values));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="paymentType"
        control={control}
        render={({ field }) => <RadioGroup {...args} {...field} />}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export const WithForm = YupTemplate.bind({});
WithForm.args = {
  options: [
    { label: 'Готівка', value: 'cash' },
    { label: 'Картка', value: 'card' },
  ],
};
