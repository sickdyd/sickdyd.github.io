import NextLink from "next/link";
import { ReactNode } from "react";

export default function NavbarEntry({
  children,
  href,
  target = "_self",
  toggleMenu,
  pathname,
}: {
  children: ReactNode;
  href: string;
  pathname: string;
  toggleMenu: () => void;
  target?: string;
}) {
  const Arrow = () => <span className="hidden sm:mr-1 sm:block">-&gt;</span>;

  return (
    <NextLink className="link" target={target} href={href} onClick={toggleMenu}>
      <span className="flex items-center whitespace-nowrap">
        {(pathname === href || (pathname.includes(href) && href !== "/")) && (
          <Arrow />
        )}
        {children}
      </span>
    </NextLink>
  );
}
