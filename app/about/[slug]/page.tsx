import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function AboutUs({params}: {params: {slug: string}}) {
    return (
        <main className="flex min-h-screen flex-col justify-center items-center p-24">
           <div className="mb-8">Test card {params.slug} details</div>
            <Link href={'/about'}><Button className="hover:bg-amber-400">Return to About</Button></Link>
        </main>
    );
}