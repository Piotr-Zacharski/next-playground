import Link from "next/link";
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import yoda from "@/assets/yoda.png";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

export default function CustomNavigation() {
    return (
        <nav className="bg-amber-400 h-14 p-4">
            <ul className="flex flex-row gap-6 items-center justify-between h-full">
                <li>
                    <Link href="/">
                        <h3 className="hover:font-bold">Home</h3>
                    </Link>
                </li>
                <li className="flex-grow">
                    <Link href="/about">
                        <h3 className="hover:font-bold">About</h3>
                    </Link>
                </li>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger><Avatar>
                            <AvatarImage src={yoda.src} alt="Yoda"/>
                        </Avatar></TooltipTrigger>
                        <TooltipContent arrowPadding={2}>
                           Yoda
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

            </ul>

        </nav>
    )
}