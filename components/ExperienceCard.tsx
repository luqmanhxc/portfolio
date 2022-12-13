import React from "react";
import { motion } from "framer-motion";

type Props = {};

const ExperienceCard = (props: Props) => {
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
                src="https://www.pcf.org.sg/css/img/corporate_logo.png"
                alt=""
            />

            <div className="px-0 md:px-10">
                <h4 className="text-4xl font-light">Data Analyst Intern</h4>
                <p className="font-bold text-2xl mt-1">
                    PAP Community Foundation
                </p>
                <div className="flex space-x-2 my-2">
                    {/* Tech Used */}
                    <img
                        className="h-10 w-10 rounded-full"
                        src="https://w7.pngwing.com/pngs/18/497/png-transparent-black-and-blue-atom-icon-screenshot-react-javascript-responsive-web-design-github-angularjs-github-logo-electric-blue-signage.png"
                        alt=""
                    />
                    <img
                        className="h-10 w-10 rounded-full"
                        src="https://w7.pngwing.com/pngs/18/497/png-transparent-black-and-blue-atom-icon-screenshot-react-javascript-responsive-web-design-github-angularjs-github-logo-electric-blue-signage.png"
                        alt=""
                    />
                    <img
                        className="h-10 w-10 rounded-full"
                        src="https://w7.pngwing.com/pngs/18/497/png-transparent-black-and-blue-atom-icon-screenshot-react-javascript-responsive-web-design-github-angularjs-github-logo-electric-blue-signage.png"
                        alt=""
                    />
                </div>
                <p className="uppercase py-5 text-gray-300">
                    Started work.. Ended...
                </p>

                <ul className="list-disc space-y-4 ml-5 text-lg h-[250px] overflow-y-scroll">
                    <li>
                        Summary pointsSummary pointsSummary pointsSummary
                        pointsSummary points
                    </li>
                    <li>
                        Summary pointsSummary pointsSummary pointsSummary
                        pointsSummary points
                    </li>
                    <li>
                        Summary pointsSummary pointsSummary pointsSummary
                        pointsSummary points
                    </li>
                    <li>
                        Summary pointsSummary pointsSummary pointsSummary
                        pointsSummary points
                    </li>
                    <li>
                        Summary pointsSummary pointsSummary pointsSummary
                        pointsSummary points
                    </li>
                </ul>
            </div>
        </article>
    );
};

export default ExperienceCard;
