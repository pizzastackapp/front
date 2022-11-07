import { useReactiveVar } from '@apollo/client';
import { isLoggedInReactive } from '@app/modules/auth/store/reactive-vars';
import { useEffect } from 'react';

export const useAuthState = () => {
  const getToken = () => localStorage.getItem('jwt');

  useEffect(() => {
    const token = getToken();
    isLoggedInReactive(Boolean(token));
  }, []);

  const logout = () => {
    localStorage.removeItem('jwt');
    isLoggedInReactive(false);
  };

  const login = (token: string) => {
    localStorage.setItem('jwt', token);

    isLoggedInReactive(true);
  };

  const isLoggedin = useReactiveVar(isLoggedInReactive);

  return { logout, getToken, login, isLoggedin };
};
