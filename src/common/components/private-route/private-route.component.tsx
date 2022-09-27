import { FC, PropsWithChildren, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

export const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const jwt = localStorage.getItem('jwt');

  if (!jwt) {
    return <Navigate to="/login" />;
  }

  return children as ReactElement;
};
