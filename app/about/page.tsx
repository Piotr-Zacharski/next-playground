import {Avatar, AvatarImage} from "@/components/ui/avatar";
import yoda from "@/assets/yoda.png";
import spiderman from "@/assets/spiderman.png";
import batman from "@/assets/batman.png";
import CustomCard from "@/components/CustomCard/CustomCard";
import dayjs from "dayjs";
import Link from "next/link";

const yesterday = dayjs().subtract(1, 'day').format('DD.MM.YYYY');
const today = dayjs().format('DD.MM.YYYY');
const tomorrow = dayjs().add(1, 'day').format('DD.MM.YYYY');

const data = [{
    title: "Test card", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", avatar: batman.src, day: yesterday},
    {title: "Test card", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", avatar: yoda.src, day: today},
    {title: "Test card", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", avatar: spiderman.src, day: tomorrow}
]

export default function About() {
    return (
        <main className="grid grid-cols-3 gap-2 min-h-screen items-center p-24">
            {data.map((item, index) =>
                <Link href={`/about/${index + 1}`} key={index}>
                <CustomCard title={`${item.title} ${index + 1}`} description={item.description}
                            footer={item.day}
                            content={<Avatar className=" border-4">
                                <AvatarImage src={item.avatar} alt={item.avatar}/>
                            </Avatar>}/>
                </Link>
            )}
        </main>
    );
}