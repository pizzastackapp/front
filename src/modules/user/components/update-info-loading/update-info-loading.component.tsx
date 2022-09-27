import { InputLoading } from '@app/common/components/input-loading/input-loading.component';
import { FC } from 'react';

interface UpdateInfoLoadingProps {}

export const UpdateInfoLoading: FC<UpdateInfoLoadingProps> = () => {
  return (
    <div className="p-6 animate-pulse border border-gray-200 rounded-md shadow">
      <div className="w-36 h-7 rounded-full bg-gray-200 mb-6"></div>
      <div className="flex gap-9 mb-14">
        <div className="flex flex-col gap-6 w-1/2">
          <InputLoading />
          <InputLoading />
        </div>
        <div className="flex flex-col gap-6 w-1/2">
          <InputLoading />
        </div>
      </div>
      <div className="flex justify-end">
        <div className="w-24 h-10 bg-gray-200 rounded-full" />
      </div>
    </div>
  );
};
