"use client"

import CustomLink from "@/components/CustomLink/CustomLink";
import yoda from "../assets/yoda.png";
import Image from "next/image";
import {useState} from "react";

export default function Home() {
    const [showTooltip, setShowTooltip] = useState(false);
  return (
    <main className="flex min-h-screen flex-col justify-center items-center p-24">
      Home
        <CustomLink href={'/about'} > <div className="relative" onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
            <Image className="rounded-3xl border-4 border-fuchsia-500 hover:border-black" width={40} height={40} src={yoda} alt="grogu"/>
            {showTooltip && (
                <span className="absolute top-0 left-full bg-black text-white px-2 py-1 rounded-md text-xs -mt-4 ml-2">Yoda</span>
            )}
        </div>
            About Page</CustomLink>

    </main>
  );
}
