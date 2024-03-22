import Link from "next/link";
import React, {ReactNode} from "react";

interface LinkProps {
    href: string;
    children: ReactNode;
}

export default function CustomLink({ href, children }: LinkProps) {
  return (
      <Link className="rounded-xl border-4 w-32 flex flex-row items-center justify-around p-2 m-2 border-amber-400 hover:border-red-700 hover:text-green-400 text-center text" href={href}>{children}</Link>
    );
}