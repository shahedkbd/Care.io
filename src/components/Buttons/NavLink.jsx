"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const path = usePathname();
  const isActive =
    href === "/"
      ? path === "/"
      : path.startsWith(href);
  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded-md font-medium transition
        ${isActive ? "text-primary bg-amber-400" : "max-lg:text-secondary text-white"}
      `}
    >
      {children}
    </Link>
  );
};

export default NavLink;
