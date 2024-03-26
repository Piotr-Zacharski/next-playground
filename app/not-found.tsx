"use client"


import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

export default function NotFound() {
    const router = useRouter();
    const [seconds, setSeconds] = useState(5);

    useEffect(() => {
        const redirectTimeout = setTimeout(() => {
            router.push('/');
        }, seconds * 1000);

        const interval = setInterval(() => {
            if (seconds > 1) {
                setSeconds(prevSeconds => prevSeconds - 1);
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => {
            clearTimeout(redirectTimeout);
            clearInterval(interval);
        };
    }, [router, seconds]);

    return (
        <main className="flex min-h-screen flex-col justify-center items-center p-24">
<h1 className="animate-pulse text-red-600 text-9xl">404</h1>
            <h1 className="text-6xl rotate-1 skew-y-6 rounded-br-lg rounded-tl-lg border-4 border-white group-hover:rotate-180">Oops! Page <span className="animate-pulse text-red-600">not found.</span></h1>
            <p className="text-xl mt-4">Redirecting to home page in {seconds} seconds...</p>
        </main>
    );
}