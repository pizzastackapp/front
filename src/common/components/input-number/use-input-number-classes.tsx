import { InputNumberSize } from '@app/common/components/input-number/input-number.types';
import clsx from 'clsx';

export const useInputNumberClasses = (
  isFocused: boolean,
  size?: keyof typeof InputNumberSize,
  error?: string,
  fullWidth?: boolean
) => {
  const inputClasses = clsx(
    'border shadow-sm bg-white rounded-md text-sm placeholder-gray-400 mb-2 outline-none transition-all',
    {
      'py-2 pl-15 pr-20': size === InputNumberSize.m,
      'py-0.5 pl-9 pr-14': size === InputNumberSize.s,
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
    'h-9 w-9': size === InputNumberSize.m,
    'h-6 w-6': size === InputNumberSize.s,
    'border-gray-300': !error,
    'border-red-300': error && !isFocused,
    'border-red-500': error && isFocused,
  };

  const buttonMinusClasses = clsx('border-r', commonButtonClasses);

  const buttonPlusClasses = clsx('border-l right-0', commonButtonClasses);

  const buttonIconsClasses = clsx('mx-auto transition-all', {
    'w-3 h-3': size === InputNumberSize.s,
    'child-path:stroke-gray-400': !error,
    'child-path:stroke-red-300': error && !isFocused,
    'child-path:stroke-red-500': error && isFocused,
  });

  const errorMarkClasses = clsx('h-4 w-4 absolute child-path:fill-red-500', {
    'top-2.75 right-12': size === InputNumberSize.m,
    'top-1.25 right-8': size === InputNumberSize.s,
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
