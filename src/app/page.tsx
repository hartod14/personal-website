import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "@/styles/portfolio/style.css";
import Link from "next/link";
import Title from "../components/common/Title";
import Skills from "../components/skill/Skills";
import BlinkText from "../components/portfolio/BlinkText";
import Experience from "../components/experience/Experience";
import Contact from "../components/contact/Contact";

export default function Home() {
  return (
    <body>
      <div>
        <section className="top-0 z-10 px-4 md:px-20">
          <nav className="py-6 flex items-center justify-between text-black-900">
            <Image
              className="w-10 md:w-16"
              src="/portfolio/ht_logo.png"
              width={60}
              height={50}
              alt={"haritody_logo"}
            />
            <div
              id="nav-link"
              className="flex gap-4 md:gap-16 text-base font-semibold"
            >
              <a
                className="text-md md:text-xl hover:text-blue-600 transition-colors duration-200"
                href="#about"
              >
                About
              </a>
              <a
                className="text-md md:text-xl hover:text-blue-600 transition-colors duration-200"
                href="#works"
              >
                Works
              </a>
              <a
                className="text-md md:text-xl hover:text-blue-600 transition-colors duration-200"
                href="#contact"
              >
                Resume
              </a>
            </div>
            <a
              className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              href="#contact"
            >
              Contact
            </a>
          </nav>
        </section>

        <section
          id="text-box"
          className="flex flex-col gap-5 mt-16 md:mt-32 mb-40 md:mb-52 px-4 md:px-20"
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
              className="bg-white p-2 rounded-lg"
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
              of industry experience and handled <b>15+</b> various projects.
              I`m a highly motivated person who is passionate about all things
              digital and programming. I`m bravely started switching my career
              from economic academic to the digital world, starting from UI/UX
              design and currently specializing as a Fullstack web developer.
            </p>
          </div>
        </section>

        <Skills />

        <Experience />

        <section id="works" className="py-20 px-4 md:px-20">
          <Title title="My Projects" />
          <div className="flex flex-wrap gap-2 md:gap-20 justify-center">
            <div className="p-c" id="p01">
              <div className="layer">
                <div className="sub-layer">
                  <div className="mb-5 ">
                    <div>
                      <div className="sub-layer-text mb-1">Slicing Gojek</div>
                      Next.js, Tailwind
                    </div>
                  </div>
                  <div className="flex justify-center gap-3">
                    <Link
                      target="_blank"
                      className="flex items-center bg-transparent hover:bg-blue-500 text-xs md:text-lg font-semibold hover:text-white py-1 md:py-2 px-2 md:px-4 border border-white hover:border-transparent rounded"
                      href={"gojek"}
                    >
                      <svg
                        className="w-6 h-6 me-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeWidth="2"
                          d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                        />
                        <path
                          stroke="currentColor"
                          strokeWidth="2"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                      Live Preview
                    </Link>
                    <Link
                      target="_blank"
                      className="flex items-center bg-transparent hover:bg-blue-500 text-xs md:text-lg font-semibold hover:text-white py-1 md:py-2 px-2 md:px-4 border border-white hover:border-transparent rounded"
                      href={"gojek/detail"}
                    >
                      Detail{" "}
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-c" id="p02">
              <div className="layer">
                <div className="sub-layer">
                  <div className="mb-5 ">
                    <div>
                      <div className="sub-layer-text mb-1">Task Todolist</div>
                      Next.js, React, Tailwind
                    </div>
                  </div>
                  <div className="flex justify-center gap-3">
                    <Link
                      target="_blank"
                      className="flex items-center bg-transparent hover:bg-blue-500 text-xs md:text-lg font-semibold hover:text-white py-1 md:py-2 px-2 md:px-4 border border-white hover:border-transparent rounded"
                      href={"todolist"}
                    >
                      <svg
                        className="w-6 h-6 me-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeWidth="2"
                          d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                        />
                        <path
                          stroke="currentColor"
                          strokeWidth="2"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                      Live Preview
                    </Link>
                    <Link
                      target="_blank"
                      className="flex items-center bg-transparent hover:bg-blue-500 text-xs md:text-lg font-semibold hover:text-white py-1 md:py-2 px-2 md:px-4 border border-white hover:border-transparent rounded"
                      href={"todolist/detail"}
                    >
                      Detail{" "}
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Contact />

        {/* <section id="testimonials" className="py-24 px-4 md:px-20 bg-white">
          <h1 className="text-center text-3xl font-bold mb-14">
            Client Testimonials
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center space-x-4">
                <Image
                  width={200}
                  height={200}
                  className="w-12 h-12 rounded-full object-cover"
                  src="/portfolio/testimonial/person1.jpg"
                  alt="Client Photo"
                />
                <div>
                  <p className="text-xl font-semibold text-gray-800">
                    John Doe
                  </p>
                  <p className="text-sm text-gray-500">CEO, Tech Innovators</p>
                </div>
              </div>
              <p className="mt-6 text-lg text-gray-700 italic">
                "Working with Hari was a game-changer for our team. His
                full-stack expertise helped us build a scalable platform that
                exceeded our expectations."
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center space-x-4">
                <Image
                  width={200}
                  height={200}
                  className="w-12 h-12 rounded-full object-cover"
                  src="/portfolio/testimonial/person2.jpg"
                  alt="Client Photo"
                />
                <div>
                  <p className="text-xl font-semibold text-gray-800">
                    Jane Smith
                  </p>
                  <p className="text-sm text-gray-500">
                    CTO, Digital Solutions
                  </p>
                </div>
              </div>
              <p className="mt-6 text-lg text-gray-700 italic">
                "Hari's attention to detail and commitment to delivering
                high-quality work is unmatched. Our website has never performed
                better."
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center space-x-4">
                <Image
                  width={200}
                  height={200}
                  className="w-12 h-12 rounded-full object-cover"
                  src="/portfolio/testimonial/person3.jpg"
                  alt="Client Photo"
                />
                <div>
                  <p className="text-xl font-semibold text-gray-800">
                    Michael Lee
                  </p>
                  <p className="text-sm text-gray-500">Freelancer</p>
                </div>
              </div>
              <p className="mt-6 text-lg text-gray-700 italic">
                "I highly recommend Hari for any full-stack development work.
                His expertise in both front-end and back-end was essential for
                our project's success."
              </p>
            </div>
          </div>
        </section> */}
      </div>
    </body>
  );
}
