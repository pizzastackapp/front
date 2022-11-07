import { FC, PropsWithChildren } from 'react';

interface ActionPaperFooterProps {}

export const ActionPaperFooter: FC<PropsWithChildren<ActionPaperFooterProps>> =
  ({ children }) => {
    return (
      <div className="bg-gray-50 py-3 px-6 rounded-b-md flex justify-end">
        {children}
      </div>
    );
  };
