import { useAuthState } from '@app/modules/auth/hooks/use-auth-state';
import clsx from 'clsx';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface MobileMenuProps {
  isMenuOpened: boolean;
  setIsMenuOpened: (value: boolean) => void;
}

export const MobileMenu: FC<MobileMenuProps> = ({
  isMenuOpened,
  setIsMenuOpened,
}) => {
  const { isLoggedin, logout } = useAuthState();

  const mobileMenuClasses = clsx(
    'bg-white z-10 fixed w-full mt-12 h-full p-4 sm:hidden',
    {
      hidden: !isMenuOpened,
      block: isMenuOpened,
    }
  );

  const closeMenu = () => setIsMenuOpened(false);

  const handleLogout = () => {
    closeMenu();
    logout();
  };

  return (
    <div className={mobileMenuClasses}>
      <ul>
        <li>
          <Link
            to="/checkout"
            onClick={closeMenu}
            className="border-b w-full block py-2"
          >
            До корзини
          </Link>
        </li>
        {isLoggedin ? (
          <>
            <li>
              <Link
                to="/profile"
                onClick={closeMenu}
                className="border-b w-full block py-2"
              >
                Ваш профіль
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={handleLogout}
                className="border-b w-full block py-2"
              >
                Вийти
              </Link>
            </li>
          </>
        ) : (
          <li>
            <Link
              to="/login"
              onClick={closeMenu}
              className="border-b w-full block py-2"
            >
              Війти
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};
