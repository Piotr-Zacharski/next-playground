import CustomLink from "@/components/CustomLink/CustomLink";

export default function About() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            About
            <CustomLink href={'/'} >Home</CustomLink>
        </main>
    );
}