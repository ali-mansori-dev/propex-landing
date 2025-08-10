// components/NavLink.tsx
"use client"; // Required for client-side hooks like usePathname

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  activeClassName?: string;
  className?: string;
  external?: boolean;
  exact?: boolean; // Optional: Match exact pathname
}

const NavLink = ({
  href,
  children,
  activeClassName = "active",
  className = "",
  exact = false,
  external = false,
}: NavLinkProps) => {
  const pathname = usePathname();

  const isActive = exact ? pathname === href : pathname.endsWith(href);

  const combinedClassName = isActive
    ? `${className} ${activeClassName}`.trim()
    : className;

  return (
    <Link
      href={href}
      className={combinedClassName}
      target={external ? "_blank" : "_self"}
    >
      {children}
    </Link>
  );
};

export default NavLink;
