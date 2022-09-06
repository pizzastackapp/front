import { FC } from 'react';

interface SkeletonProps {
  width: number;
  height: number;
}

export const Skeleton: FC<SkeletonProps> = ({ width, height }) => {
  return (
    <div
      className="bg-gray-200 rounded-full animate-pulse"
      style={{ width, height }}
    />
  );
};
