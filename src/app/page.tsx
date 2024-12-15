import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "@/styles/portfolio/style.css"
import BlinkText from "@/components/portfolio/blinkText";
import Link from "next/link";

export default function Home() {
  return (
    <body>
      <div>
        <section className="top-0 z-10 px-4 md:px-20">
          <nav className="py-6 flex items-center justify-between text-black-900">
            <Image className="w-10 md:w-16" src="/portfolio/ht_logo.png" width={60} height={50} alt={"haritody_logo"} />
            <div id="nav-link" className="flex gap-4 md:gap-16 text-base font-semibold">
              <a className="text-md md:text-xl" href="#about">About</a>
              <a className="text-md md:text-xl" href="#works">Works</a>
              <a className="text-md md:text-xl" href="#contact">Resume</a>
            </div>
            <a className="button" href="#contact">Contact</a>
          </nav>
        </section>

        <section id="text-box" className="flex flex-col gap-5 mt-16 md:mt-32 mb-40 md:mb-52 px-4 md:px-20">
          <div className="text-2xl text-center text-blue-600">👋 Hello, My name is</div>
          <h1 className="text-5xl text-center text-blue-700 font-bold">Hari Tody</h1>
          <BlinkText />
        </section>

        <section id="about" className="md:flex gap-20 bg-gray-100 py-24 px-4 md:px-20">
          <div className="mb-3">
            <div className="bg-white p-2">
              <Image
                width={1260}
                height={1260}
                src="/portfolio/me.jpg"
                alt="scale"
                loading="eager"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="p-5 bg-white rounded-xl">
              <h1 className="text-center text-3xl font-bold">About Myself</h1>
            </div>
            <div className="p-5 bg-white rounded-xl">
              <p>I`m a highly motivated person who is passionate about all things digital and programming. I`m bravely started switching my career from economic academic to the digital world, starting from UI/UX design and currently specializing as a Fullstack web developer.</p>
            </div>
            <div className="p-5 bg-white rounded-xl">
              <p>Beside of that, I like to travelling and photographing — taking picture of different places, reading book, playing musical instrument, watching movies, and sometimes playing games.</p>
            </div>
          </div>
        </section>


        <section id="skills" className=" pt-24 pb px-4 md:px-20">
          <h1 className="text-center text-3xl font-bold mb-10">My Skills</h1>
          <div className="md:flex justify-center gap-20">

            {/* Frontend Section */}
            <div className="mb-10">
              <h2 className="text-center text-2xl font-semibold mb-6">Frontend</h2>
              <div className="flex flex-wrap gap-10 items-center justify-center">
                <div className="relative text-center group flex flex-col items-center">
                  <Image
                    src={"/portfolio/skills/react.png"}
                    width={70}
                    height={70}
                    alt="skill"
                    className="transition-transform duration-300 hover:scale-110"
                  />
                  <div className="mt-2 text-sm font-medium text-gray-900 md:hidden">
                    React.js
                  </div>
                  <div className="hidden md:block absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-max text-sm font-medium text-white bg-gray-800 p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    React.js
                  </div>
                </div>
                <div className="relative text-center group flex flex-col items-center">
                  <Image
                    src={"/portfolio/skills/next.png"}
                    width={70}
                    height={70}
                    alt="skill"
                    className="transition-transform duration-300 hover:scale-110"
                  />
                  <div className="mt-2 text-sm font-medium text-gray-900 md:hidden">
                    Next.js
                  </div>
                  <div className="hidden md:block absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-max text-sm font-medium text-white bg-gray-800 p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Next.js
                  </div>
                </div>
                <div className="relative text-center group flex flex-col items-center">
                  <Image
                    src={"/portfolio/skills/tailwind.png"}
                    width={70}
                    height={70}
                    alt="skill"
                    className="transition-transform duration-300 hover:scale-110"
                  />
                  <div className="mt-2 text-sm font-medium text-gray-900 md:hidden">
                    Tailwind CSS
                  </div>
                  <div className="hidden md:block absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-max text-sm font-medium text-white bg-gray-800 p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Tailwind CSS
                  </div>
                </div>
              </div>
            </div>

            {/* Backend Section */}
            <div className="mb-10">
              <h2 className="text-center text-2xl font-semibold mb-6">Backend</h2>
              <div className="flex flex-wrap gap-10 items-center justify-center">
                <div className="relative text-center group flex flex-col items-center">
                  <Image
                    src={"/portfolio/skills/node.png"}
                    width={70}
                    height={70}
                    alt="skill"
                    className="transition-transform duration-300 hover:scale-110"
                  />
                  <div className="mt-2 text-sm font-medium text-gray-900 md:hidden">
                    Node.js
                  </div>
                  <div className="hidden md:block absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-max text-sm font-medium text-white bg-gray-800 p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Node.js
                  </div>
                </div>
                <div className="relative text-center group flex flex-col items-center">
                  <Image
                    src={"/portfolio/skills/express.png"}
                    width={70}
                    height={70}
                    alt="skill"
                    className="transition-transform duration-300 hover:scale-110"
                  />
                  <div className="mt-2 text-sm font-medium text-gray-900 md:hidden">
                    Express.js
                  </div>
                  <div className="hidden md:block absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-max text-sm font-medium text-white bg-gray-800 p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Express.js
                  </div>
                </div>
                <div className="relative text-center group flex flex-col items-center">
                  <Image
                    src={"/portfolio/skills/golang.png"}
                    width={70}
                    height={70}
                    alt="skill"
                    className="transition-transform duration-300 hover:scale-110"
                  />
                  <div className="mt-2 text-sm font-medium text-gray-900 md:hidden">
                    Golang
                  </div>
                  <div className="hidden md:block absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-max text-sm font-medium text-white bg-gray-800 p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Golang
                  </div>
                </div>
              </div>
            </div>

            {/* DevOps/Tools Section */}
            <div>
              <h2 className="text-center text-2xl font-semibold mb-6">DevOps / Tools</h2>
              <div className="flex flex-wrap gap-8 items-center justify-center">
                <div className="relative text-center group flex flex-col items-center">
                  <Image
                    src={"/portfolio/skills/docker.png"}
                    width={70}
                    height={70}
                    alt="skill"
                    className="transition-transform duration-300 hover:scale-110"
                  />
                  <div className="mt-2 text-sm font-medium text-gray-900 md:hidden">
                    Docker
                  </div>
                  <div className="hidden md:block absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-max text-sm font-medium text-white bg-gray-800 p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Docker
                  </div>
                </div>
                <div className="relative text-center group flex flex-col items-center">
                  <Image
                    src={"/portfolio/skills/git.png"}
                    width={70}
                    height={70}
                    alt="skill"
                    className="transition-transform duration-300 hover:scale-110"
                  />
                  <div className="mt-2 text-sm font-medium text-gray-900 md:hidden">
                    Git
                  </div>
                  <div className="hidden md:block absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-max text-sm font-medium text-white bg-gray-800 p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Git
                  </div>
                </div>
                <div className="relative text-center group flex flex-col items-center">
                  <Image
                    src={"/portfolio/skills/figma.png"}
                    width={70}
                    height={70}
                    alt="skill"
                    className="transition-transform duration-300 hover:scale-110"
                  />
                  <div className="mt-2 text-sm font-medium text-gray-900 md:hidden">
                    Figma
                  </div>
                  <div className="hidden md:block absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-max text-sm font-medium text-white bg-gray-800 p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Figma
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section id="works" className="py-20 px-4 md:px-20">
          <h1 className="text-center text-3xl font-bold mb-14">These are some my works</h1>
          <div className="flex flex-wrap gap-2 md:gap-20 justify-center">
            <div className="p-c" id="p01">
              <div className="layer">
                <div className="sub-layer">
                  <div className="mb-5 ">
                    <div>
                      <div className="sub-layer-text mb-1">Slicing Gojek</div>Next.js, Tailwind
                    </div>
                  </div>
                  <div className="flex justify-center gap-3">
                    <Link target="_blank" className="flex items-center bg-transparent hover:bg-blue-500 text-xs md:text-lg font-semibold hover:text-white py-1 md:py-2 px-2 md:px-4 border border-white hover:border-transparent rounded" href={"gojek"}><svg className="w-6 h-6 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeWidth="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                      <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                      Live Preview</Link>
                    <Link target="_blank" className="flex items-center bg-transparent hover:bg-blue-500 text-xs md:text-lg font-semibold hover:text-white py-1 md:py-2 px-2 md:px-4 border border-white hover:border-transparent rounded" href={"gojek/detail"}>Detail <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-c" id="p02">
              <div className="layer">
                <div className="sub-layer">
                  <div className="mb-5 ">
                    <div>
                      <div className="sub-layer-text mb-1">Task Todolist</div>Next.js, React, Tailwind
                    </div>
                  </div>
                  <div className="flex justify-center gap-3">
                    <Link target="_blank" className="flex items-center bg-transparent hover:bg-blue-500 text-xs md:text-lg font-semibold hover:text-white py-1 md:py-2 px-2 md:px-4 border border-white hover:border-transparent rounded" href={"todolist"}><svg className="w-6 h-6 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeWidth="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                      <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                      Live Preview</Link>
                    <Link target="_blank" className="flex items-center bg-transparent hover:bg-blue-500 text-xs md:text-lg font-semibold hover:text-white py-1 md:py-2 px-2 md:px-4 border border-white hover:border-transparent rounded" href={"todolist/detail"}>Detail <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="py-24 px-4 md:px-20 bg-gray-100">
          <h1 className="text-center text-3xl font-bold mb-14">My Experience</h1>
          <div className="space-y-12">
            <div className="relative group bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute top-0 left-6 w-1 bg-blue-600 h-full rounded-full"></div>
              <div className="pl-12">
                <h2 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  Full-Stack Developer
                </h2>
                <p className="text-lg text-gray-600">Tech Innovators Inc.</p>
                <p className="text-sm text-gray-500 mb-6">2021 - Present</p>
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                  <li>Developed and maintained scalable web applications using Next.js and Tailwind CSS.</li>
                  <li>Integrated RESTful APIs and optimized backend performance with Node.js.</li>
                  <li>Collaborated with cross-functional teams to design and deliver innovative solutions.</li>
                </ul>
              </div>
            </div>

            <div className="relative group bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute top-0 left-6 w-1 bg-blue-600 h-full rounded-full"></div>
              <div className="pl-12">
                <h2 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  Freelance Web Developer
                </h2>
                <p className="text-lg text-gray-600">Self-Employed</p>
                <p className="text-sm text-gray-500 mb-6">2018 - 2021</p>
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                  <li>Built custom websites for small businesses, ensuring responsiveness and SEO optimization.</li>
                  <li>Designed user-friendly interfaces with modern front-end technologies.</li>
                  <li>Managed client relationships and delivered projects on time and within budget.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-24 px-4 md:px-20 bg-white">
          <h1 className="text-center text-3xl font-bold mb-14">Client Testimonials</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center space-x-4">
                <Image width={200} height={200} className="w-12 h-12 rounded-full object-cover" src="/portfolio/testimonial/person1.jpg" alt="Client Photo" />
                <div>
                  <p className="text-xl font-semibold text-gray-800">John Doe</p>
                  <p className="text-sm text-gray-500">CEO, Tech Innovators</p>
                </div>
              </div>
              <p className="mt-6 text-lg text-gray-700 italic">“Working with Hari was a game-changer for our team. His full-stack expertise helped us build a scalable platform that exceeded our expectations.”</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center space-x-4">
                <Image width={200} height={200} className="w-12 h-12 rounded-full object-cover" src="/portfolio/testimonial/person2.jpg" alt="Client Photo" />
                <div>
                  <p className="text-xl font-semibold text-gray-800">Jane Smith</p>
                  <p className="text-sm text-gray-500">CTO, Digital Solutions</p>
                </div>
              </div>
              <p className="mt-6 text-lg text-gray-700 italic">“Hari’s attention to detail and commitment to delivering high-quality work is unmatched. Our website has never performed better.”</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center space-x-4">
                <Image width={200} height={200} className="w-12 h-12 rounded-full object-cover" src="/portfolio/testimonial/person3.jpg" alt="Client Photo" />
                <div>
                  <p className="text-xl font-semibold text-gray-800">Michael Lee</p>
                  <p className="text-sm text-gray-500">Freelancer</p>
                </div>
              </div>
              <p className="mt-6 text-lg text-gray-700 italic">“I highly recommend Hari for any full-stack development work. His expertise in both front-end and back-end was essential for our project’s success.”</p>
            </div>
          </div>
        </section>

        <section id="contact" className="flex flex-col gap-5 mt-16 bg-gray-100 pt-20 pb-10">
          <div className="text-5xl text-center text-blue-700 font-bold">Let`s work together...</div>
          <div className="text-3xl text-center text-blue-900 font-semibold italic">how do you will reach me?</div>
          <div className="contact-link">
            <a href="https://www.linkedin.com/in/haritody/" target="_blank" className="contact-detail flex gap-4 items-center justify-center">
              <FontAwesomeIcon className="w-6" icon={faLinkedinIn} />Linkedin
            </a>
            <a href="https://web.facebook.com/hartods/" target="_blank" className="contact-detail flex gap-4 items-center justify-center">
              <FontAwesomeIcon className="w-6" icon={faFacebook} />Facebook
            </a>
            <a href="https://www.instagram.com/haritody/" target="_blank" className="contact-detail flex gap-4 items-center justify-center">
              <FontAwesomeIcon className="w-6" icon={faInstagram} />Instagram
            </a>
            <a href="mailto:haritody@gmail.com" target="_blank" className="contact-detail flex gap-4 items-center justify-center">
              <FontAwesomeIcon className="w-6" icon={faEnvelope} />Gmail
            </a>
          </div>
          <div className="flex justify-center items-center min-h-screen px-4">
            <div className="mt-12 max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
              <h1 className="text-center text-3xl font-bold mb-14">Contact me</h1>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-lg text-gray-800 font-medium">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg text-gray-800 font-medium">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-lg text-gray-800 font-medium">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </body>
  );
}
