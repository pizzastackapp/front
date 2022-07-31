import { FooterLink } from '@app/common/components/footer-link/footer-link.component';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Common/Footer link',
  component: FooterLink,
} as ComponentMeta<typeof FooterLink>;

const Template: ComponentStory<typeof FooterLink> = (args) => (
  <ul>
    <FooterLink {...args} />
  </ul>
);

export const View = Template.bind({});
View.args = {
  href: 'tel:+380441234567',
  children: '044 123 45 67',
};
