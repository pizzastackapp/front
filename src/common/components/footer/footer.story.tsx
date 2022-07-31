import { Footer } from '@app/common/components/footer/footer.component';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Common/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const View = Template.bind({});
