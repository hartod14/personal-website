import Image from "next/image";
import "@/styles/portfolio/style.css";
import Title from "../components/common/Title";
import Skills from "../components/skill/Skills";
import BlinkText from "../components/portfolio/BlinkText";
import Experience from "../components/experience/Experience";
import Contact from "../components/contact/Contact";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ProjectCard from "../components/portfolio/ProjectCard";
import { projects, Project } from "../data/projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section
          id="text-box"
          className="flex flex-col gap-5 md:mt-32 mb-40 md:mb-52 px-4 md:px-20 relative"
        >
          <div className="text-2xl text-center text-blue-600">
            👋 Hello, My name is
          </div>
          <h1 className="text-5xl text-center text-blue-700 font-bold hover:text-blue-600 hover:text-6xl transition-all duration-500">
            Hari Tody
          </h1>
          <BlinkText />
        </section>

        <section
          id="about"
          className="md:flex gap-16 bg-[#FAFCFD] py-24 px-4 md:px-20 lg:px-52 items-center"
        >
          <div className="mb-3 hover:rotate-3 duration-300">
            <Image
              className="bg-white p-2 rounded-lg shadow-[0_10px_30px_rgba(8,_112,_184,_0.3)] hover:shadow-[0_10px_30px_rgba(8,_112,_184,_0.4)] transition-all duration-300"
              width={960}
              height={960}
              src="/portfolio/me.jpg"
              alt="scale"
              loading="eager"
              sizes="(max-width: 768px) 600px, 1260px"
            />
          </div>
          <div className="flex flex-col gap-4">
            <Title title="About Myself" />
            <p className="text-secondary leading-7 text-center text-lg">
              A professional full-stack web developer with over <b>3 years</b>{" "}
              of industry experience and handled <b>10+</b> various projects.
              I`m a highly motivated person who is passionate about all things
              digital and programming. I`m bravely started switching my career
              from economic academic to the digital world, starting from UI/UX
              design and currently specializing as a Fullstack web developer.
            </p>
          </div>
        </section>

        <section id="skill" className="py-24 px-4 md:px-20">
          <Skills />
        </section>

        <section id="experience" className="py-24 px-4 md:px-20 bg-[#FAFCFD]">
          <Experience />
        </section>

        <section id="works" className="py-20 px-4 md:px-20">
          <Title title="My Projects" />
          <p className="text-center text-secondary text-lg mb-16 mt-4">
            Here are some of the projects I've worked on throughout my career.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {projects.map((project: Project) => (
              <ProjectCard
                key={project.id}
                imageUrl={project.imageThumbnail}
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                detailsLink={project.detailsLink}
                link={project.link}
              />
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="flex flex-col gap-5 mt-16 bg-[#FAFCFD] pt-52 pb-44"
        >
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}
