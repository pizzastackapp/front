import { ReactComponent as ExclamationIcon } from '@app/assets/icons/exclamation.svg';
import { ReactComponent as InformationCircleIcon } from '@app/assets/icons/information-circle.svg';
import { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';

interface ShowInfoProps {
  type: 'error' | 'info';
}

export const ShowInfo: FC<ShowInfoProps & PropsWithChildren> = ({
  children,
  type,
}) => {
  const topBlockStyles = clsx(
    'rounded-t-2xl h-16 flex justify-center items-center mb-2',
    {
      'bg-red-500': type === 'error',
      'bg-blue-500': type === 'info',
    }
  );

  return (
    <div className="flex justify-center">
      <div className="shadow rounded-2xl w-64">
        <div className={topBlockStyles}>
          {type === 'error' ? (
            <ExclamationIcon className="text-white h-12" />
          ) : (
            <InformationCircleIcon className="text-white h-12" />
          )}
        </div>
        <div className="bg-white text-center pb-2 rounded-b-2xl">
          {children}
        </div>
      </div>
    </div>
  );
};
