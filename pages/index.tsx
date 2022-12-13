/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";

const Home = () => {
    return (
        <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]">
            <Head>
                <title>Luqman's Portfolio</title>
            </Head>

            <Header />

            <section id="hero" className="snap-start">
                <Hero />
            </section>

            <section id="about" className="snap-center">
                <About />
            </section>

            <section id="experience" className="snap-center">
                <WorkExperience />
            </section>

            <section id="skills" className="snap-start">
                <Skills />
            </section>

            <section id="projects" className="snap-start">
                <Projects />
            </section>

            <section id="contact" className="snap-start">
                <ContactMe />
            </section>

            <Link href="#hero">
                <footer className="sticky bottom-5 w-full cursor-pointer">
                    <div className="flex items-center justify-center">
                        <img
                            className="h-10 w-10 rounded-full grayscale hover:grayscale-0"
                            src="https://media-exp1.licdn.com/dms/image/C5603AQEUKXqT28-39g/profile-displayphoto-shrink_400_400/0/1658476972270?e=1676505600&v=beta&t=BQXS5Qnduu19noVce9wQYzPqvtimLdJ3zo4pzxMb16Q"
                            alt=""
                        />
                    </div>
                </footer>
            </Link>
        </div>
    );
};

export default Home;
