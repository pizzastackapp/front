import { FC, PropsWithChildren } from 'react';

interface ActionPaperProps {
  title: string;
  footer?: JSX.Element;
}

export const ActionPaper: FC<PropsWithChildren<ActionPaperProps>> = ({
  title,
  children,
  footer,
}) => {
  return (
    <div className="shadow rounded-md bg-white">
      <div className="p-6">
        <div className="text-lg font-medium text-gray-900 mb-6">{title}</div>
        <div>{children}</div>
      </div>
      {footer}
    </div>
  );
};
