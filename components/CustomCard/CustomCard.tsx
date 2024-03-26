import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {ReactNode} from "react";

interface CardProps {
    title: string;
    description: string;
    content: ReactNode;
    footer: string;
    onClick?: () => void;
}

export default function CustomCard({title, description, content, footer, onClick}: CardProps) {
    return (
        <Card className="w-96 shadow-2xl hover:scale-105" onClick={onClick}>
            <CardHeader>
                <CardTitle className="text-center m-2">{title}</CardTitle>
                <CardDescription className="text-justify">{description}</CardDescription>
            </CardHeader>
            <CardContent className="justify-center flex">
                {content}
            </CardContent>
            <CardFooter className=" flex justify-center">
                {footer}
            </CardFooter>
        </Card>

    );
}