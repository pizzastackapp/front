import clsx from 'clsx';
import { FC } from 'react';

interface SkeletonProps {
  width: number;
  height: number;
  roundFull?: boolean;
}

export const Skeleton: FC<SkeletonProps> = ({
  width,
  height,
  roundFull = true,
}) => {
  const classes = clsx('bg-gray-200 animate-pulse', {
    'rounded-full': roundFull,
    'rounded-md': !roundFull,
  });

  return <div className={classes} style={{ width, height }} />;
};
