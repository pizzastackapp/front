import { FC, PropsWithChildren } from 'react';

interface LinkProps {
  url: string;
}

export const Link: FC<LinkProps & PropsWithChildren> = ({ url, children }) => {
  return (
    <a
      href={url}
      className="relative font-semibold after:content-[''] after:block after:absolute after:w-full after:h-px hover:after:bg-amber-400"
    >
      {children}
    </a>
  );
};
