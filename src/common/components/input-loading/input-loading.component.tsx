import clsx from 'clsx';
import { FC } from 'react';

export enum InputLoadingSize {
  sm = 'sm',
  base = 'base',
}

interface InputLoadingProps {
  size?: keyof typeof InputLoadingSize;
}

export const InputLoading: FC<InputLoadingProps> = ({ size }) => {
  const inputClasses = clsx('w-full bg-gray-200 rounded-full', {
    'h-10': size === InputLoadingSize.base,
    'h-6': size === InputLoadingSize.sm,
  });

  return (
    <div>
      <div className="w-16 h-5 bg-gray-200 rounded-full mb-1" />
      <div className={inputClasses} />
    </div>
  );
};
