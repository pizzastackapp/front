import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

interface ActionPaperProps {
  title: string;
  footer?: JSX.Element;
  disableBodyPadding?: boolean;
  disableBottomPadding?: boolean;
}

export const ActionPaper: FC<PropsWithChildren<ActionPaperProps>> = ({
  title,
  children,
  footer,
  disableBodyPadding = false,
  disableBottomPadding = false,
}) => {
  const bodyClasses = clsx({
    'px-6': !disableBodyPadding,
  });

  const wrapperClasses = clsx({
    'pb-6': !disableBottomPadding,
  });

  return (
    <div className="shadow rounded-md bg-white">
      <div className={wrapperClasses}>
        <div className="text-lg font-medium text-gray-900 mb-6 pt-6 px-6">
          {title}
        </div>
        <div className={bodyClasses}>{children}</div>
      </div>
      {footer}
    </div>
  );
};
