import { ReactComponent as UserSolidIcon } from '@app/assets/icons/user-solid.svg';
import { useOnClickOutside } from '@app/common/hooks/use-on-click-outside.hook';
import { UserDropdownLink } from '@app/modules/auth/components/user-dropdown-link/user-dropdown-link.component';
import { isLoggedInReactive } from '@app/modules/auth/store/reactive-vars';
import { FC, useRef, useState } from 'react';

interface UserDropdownProps {}

export const UserDropdown: FC<UserDropdownProps> = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdownState = () => setIsDropdownOpen((v) => !v);
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => {
    if (!isDropdownOpen) {
      return;
    }

    toggleDropdownState();
  });

  const logout = () => {
    toggleDropdownState();
    localStorage.removeItem('jwt');
    isLoggedInReactive(false);
  };

  return (
    <div className="relative h-6" ref={ref}>
      <button onClick={toggleDropdownState}>
        <UserSolidIcon className="w-6 h-6 fill child-path:fill-gray-900" />
      </button>
      {isDropdownOpen && (
        <div className="absolute right-0 top-7.5 bg-white border border-gray-200 shadow-lg rounded-md py-1.5 w-49">
          <UserDropdownLink to="/profile" onClick={toggleDropdownState}>
            Ваш профіль
          </UserDropdownLink>
          <UserDropdownLink onClick={logout}>Вийти</UserDropdownLink>
        </div>
      )}
    </div>
  );
};
