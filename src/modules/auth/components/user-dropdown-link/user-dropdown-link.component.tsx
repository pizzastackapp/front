import { ComponentProps, FC, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

interface UserDropdownLinkProps {
  to?: ComponentProps<typeof Link>['to'];
  onClick?: ComponentProps<typeof Link>['onClick'];
}

export const UserDropdownLink: FC<PropsWithChildren<UserDropdownLinkProps>> = ({
  to = '',
  children,
  ...props
}) => {
  return (
    <Link
      to={to}
      className="h-9 block px-4 flex items-center text-sm transition-all hover:bg-gray-100"
      {...props}
    >
      {children}
    </Link>
  );
};
