import { FC } from 'react';

interface InputLoadingProps {}

export const InputLoading: FC<InputLoadingProps> = () => {
  return (
    <div>
      <div className="w-16 h-5 bg-gray-200 rounded-full mb-1" />
      <div className="w-full h-10 bg-gray-200 rounded-full" />
    </div>
  );
};
