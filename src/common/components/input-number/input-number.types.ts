import { ComponentProps } from 'react';

export enum InputNumberSize {
  s = 's',
  m = 'm',
}

export interface InputNumberProps {
  onChange?: ComponentProps<'input'>['onChange'];
  onBlur?: ComponentProps<'input'>['onBlur'];
  value?: number;
  name?: ComponentProps<'input'>['name'];
  disabled?: ComponentProps<'input'>['disabled'];
  label: string;
  placeholder: string;
  error?: string;
  fullWidth?: boolean;
  setValue?: (value: number) => void;
  size?: keyof typeof InputNumberSize;
}
