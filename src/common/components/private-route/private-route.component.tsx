import { useAuthState } from '@app/modules/auth/hooks/use-auth-state';
import { FC, PropsWithChildren, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

export const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const { getToken } = useAuthState();

  if (!getToken()) {
    return <Navigate to="/login" />;
  }

  return children as ReactElement;
};
