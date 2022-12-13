import React from "react";
import { motion } from "framer-motion";

// https://media-exp1.licdn.com/dms/image/C5603AQEUKXqT28-39g/profile-displayphoto-shrink_400_400/0/1658476972270?e=1676505600&v=beta&t=BQXS5Qnduu19noVce9wQYzPqvtimLdJ3zo4pzxMb16Q

type Props = {};

const About = (props: Props) => {
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
            <motion.img
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
                src="https://i.pinimg.com/564x/e0/d4/93/e0d493be29e02c4ba5eb041ac0f3d4a0.jpg"
                className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] object-top"
            />

            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-4xl font-semibold">
                    Here is a{" "}
                    <span className="underline decoration-[#F7AB0A]/50">
                        little
                    </span>{" "}
                    background
                </h4>
                <p className="text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur fermentum porttitor nisi sit amet accumsan. Sed
                    congue varius mi eget suscipit. Mauris vitae elit auctor,
                    pellentesque massa ac, varius dolor. Quisque id felis
                    libero. In congue egestas diam, sed auctor erat sodales a.
                    Duis rutrum magna ac felis ultricies consequat. Donec in
                    lacinia velit. Phasellus ac malesuada arcu, a commodo
                    sapien. Sed sodales porta quam sed dapibus. Donec ut risus
                    ante. Curabitur et ipsum ac arcu ultricies efficitur.
                    Vestibulum euismod enim quam, at faucibus metus hendrerit
                    in. Aenean non enim vitae sapien fringilla convallis.
                    Phasellus iaculis convallis nisi. Curabitur eget malesuada
                    nisl.
                </p>
            </div>
        </motion.div>
    );
};

export default About;
