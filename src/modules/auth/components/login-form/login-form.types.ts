export interface LoginFormProps {
  onFirstStepCallback?: (phoneNumber: string) => Promise<void>;
  onSecondStepCallback?: (phoneNumber: string, code: string) => Promise<void>;
}

export interface LoginFormValues {
  phoneNumber: string;
  code: string;
}

export enum LoginFormStep {
  first = 'first',
  second = 'second',
}

export type LoginFormStepKeys = keyof typeof LoginFormStep;
