import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
    experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
    return (
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] hover:opacity-100 opacity-40 p-10 cursor-pointer transition-opacity duration-200 overflow-hidden">
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{
                    y: 0,
                    opacity: 1,
                }}
                viewport={{ once: true }}
                className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
                src={urlFor(experience?.companyImage).url()}
                alt={`${experience?.company} Logo`}
            />

            <div className="px-0 md:px-10">
                <h4 className="text-4xl font-light">{experience?.jobTitle}</h4>
                <p className="font-bold text-2xl mt-1">{experience?.company}</p>
                <div className="flex space-x-2 my-4">
                    {/* Tech Used */}
                    {experience.technologies.map((technology) => (
                        <img
                            key={technology._id}
                            src={urlFor(technology?.image).url()}
                            className="w-10 rounded-full"
                        />
                    ))}
                </div>
                <p className="uppercase py-5 text-gray-300">
                    {new Date(experience.dateStarted).toLocaleDateString(
                        "en-US",
                        { month: "short", year: "numeric" }
                    )}{" "}
                    -{" "}
                    {experience.isCurrentlyWorkingHere
                        ? "Present"
                        : new Date(experience.dateEnded).toLocaleDateString(
                              "en-US",
                              { month: "short", year: "numeric" }
                          )}
                </p>

                <ul className="list-disc list-inside space-y-4 ml-5 text-lg h-[250px] overflow-y-scroll">
                    {experience?.points.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                    <li>point</li>
                </ul>
            </div>
        </article>
    );
};

export default ExperienceCard;
