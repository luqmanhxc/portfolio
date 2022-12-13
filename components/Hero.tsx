import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

const Hero = (props: Props) => {
    const [text, count] = useTypewriter({
        words: [
            "Hey, Luqman Here",
            "Web Developer",
            "React",
            "JavaScript",
            "Tailwind",
        ],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />
            {/* Change to nextjs image and whitelist later */}
            <img
                className="relative rounded-full h-32 w-32 mx-auto object-cover"
                src="https://media-exp1.licdn.com/dms/image/C5603AQEUKXqT28-39g/profile-displayphoto-shrink_400_400/0/1658476972270?e=1676505600&v=beta&t=BQXS5Qnduu19noVce9wQYzPqvtimLdJ3zo4pzxMb16Q"
                alt=""
            />
            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
                    Software Engineer
                </h2>
                <h1 className="text-5xl lg:text-6xl font-semibold px-10">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="#F7AB0A" />
                </h1>

                <div className="pt-5">
                    <Link href="#about">
                        <button className="heroButton">About</button>
                    </Link>
                    <Link href="#experience">
                        <button className="heroButton">Experiences</button>
                    </Link>
                    <Link href="#skills">
                        <button className="heroButton">Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className="heroButton">Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
