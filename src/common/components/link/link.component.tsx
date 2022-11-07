import { FC, PropsWithChildren } from 'react';

interface HeaderCategoryLinkProps {
  url: string;
}

export const HeaderCategoryLink: FC<
  PropsWithChildren<HeaderCategoryLinkProps>
> = ({ url, children }) => {
  return (
    <a
      href={url}
      className="relative font-semibold text-sm sm:text-base after:content-[''] after:block after:absolute after:w-full after:h-px hover:after:bg-amber-400"
    >
      {children}
    </a>
  );
};
