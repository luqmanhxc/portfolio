import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";

type Props = {
    pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1.5,
            }}
            className="flex flex-col text-center relative h-screen md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
        >
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                About
            </h3>
            <motion.div
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 1.2,
                }}
                viewport={{ once: true }}
                className="relative"
            >
                <Image
                    src={urlFor(pageInfo?.profilePicture).url()}
                    alt={`${pageInfo.name} Image`}
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="rounded-lg object-cover -mb-20 md:mb-0 flex-shrink-0 md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] object-top w-[200px] h-auto"
                />
            </motion.div>

            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-3xl font-semibold">
                    Here is a{" "}
                    <span className="underline decoration-[#F7AB0A]/50">
                        little
                    </span>{" "}
                    background
                </h4>
                <p className="text-md">{pageInfo?.backgroundInformation}</p>
            </div>
        </motion.div>
    );
};

export default About;
