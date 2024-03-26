import Link from "next/link";
import React, {ReactNode} from "react";
import {className} from "postcss-selector-parser";

interface LinkProps {
    href: string;
    children: ReactNode;
    className?: string;
}

export default function CustomLink({ href, children, className }: LinkProps) {
  return (
      <Link className={className} href={href}>{children}</Link>
    );
}