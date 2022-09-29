import { InputNumberSize } from '@app/common/components/input-number/input-number.types';
import clsx from 'clsx';

export const useInputNumberClasses = (
  isFocused: boolean,
  size?: keyof typeof InputNumberSize,
  error?: string,
  fullWidth?: boolean,
  hideErrorMessage?: boolean
) => {
  const inputClasses = clsx(
    'border shadow-sm bg-white rounded-md text-sm placeholder-gray-400 outline-none transition-all',
    {
      'py-2 px-15': size === InputNumberSize.base,
      'pr-20': size === InputNumberSize.base && !hideErrorMessage,
      'py-0.5 px-9': size === InputNumberSize.sm,
      'pr-14': size === InputNumberSize.sm && !hideErrorMessage,
      'border-gray-300': !error,
      'text-red-900 border-red-300 focus:border-red-500': error,
      'w-full': fullWidth,
    }
  );

  const inputWrapperClasses = clsx('relative inline-block', {
    'w-full': fullWidth,
  });

  const commonButtonClasses = {
    'absolute top-px transition': true,
    'h-9 w-9': size === InputNumberSize.base,
    'h-6 w-6': size === InputNumberSize.sm,
    'border-gray-300': !error,
    'border-red-300': error && !isFocused,
    'border-red-500': error && isFocused,
  };

  const buttonMinusClasses = clsx('border-r', commonButtonClasses);

  const buttonPlusClasses = clsx('border-l right-0', commonButtonClasses);

  const buttonIconsClasses = clsx('mx-auto transition-all', {
    'w-3 h-3': size === InputNumberSize.sm,
    'child-path:stroke-gray-400': !error,
    'child-path:stroke-red-300': error && !isFocused,
    'child-path:stroke-red-500': error && isFocused,
  });

  const errorMarkClasses = clsx('h-4 w-4 absolute child-path:fill-red-500', {
    'top-2.75 right-12': size === InputNumberSize.base,
    'top-1.25 right-8': size === InputNumberSize.sm,
  });

  return {
    inputClasses,
    inputWrapperClasses,
    buttonIconsClasses,
    buttonPlusClasses,
    buttonMinusClasses,
    errorMarkClasses,
  };
};
