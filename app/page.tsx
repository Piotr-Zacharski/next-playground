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
    </main>
  );
}
