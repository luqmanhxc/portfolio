import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";

type Props = {
    skill: Skill;
    directionLeft?: boolean;
};

const Skill = ({ directionLeft, skill }: Props) => {
    return (
        <motion.div
            initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
            }}
            transition={{
                duration: 1.5,
            }}
            whileInView={{
                x: 0,
                opacity: 1,
            }}
            className="group relative flex cursor-pointer"
        >
            <Image
                src={urlFor(skill.image).url()}
                alt={`${skill.title} Logo`}
                width="96"
                height="96"
                className="rounded-full border border-gray-500 object-cover h-24 w-24 md:w-28 md:h-28 xl:h-32 xl:w-32 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 duration-300 ease-in-out group-hover:bg-white h-24 w-24 rounded-full md:w-28 md:h-28 xl:h-32 xl:w-32 z-0">
                <div className="flex items-center justify-center h-full">
                    <p className="text-3xl font-bold text-black opacity-100">
                        {skill.progress}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default Skill;
