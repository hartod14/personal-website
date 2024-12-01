import Image from "next/image";

export default function Home() {
  return (
    <section>
      <section className="top-0 z-10">
        <nav className="px-20 py-10 flex items-center justify-between text-black-900">
          <div className="font-black text-3xl">Portfolio</div>
          <div className="flex gap-10 text-base font-semibold">
            <a className="text-2xl" href="#about">About</a>
            <a className="text-2xl" href="#works">Works</a>
            <a className="text-2xl" href="#contact">Resume</a>
            <a className="text-2xl text-blue-600" href="#contact">Contact</a>
          </div>
        </nav>
      </section>
      <section className="flex flex-col gap-5 mt-40 mb-52">
        <div className="text-2xl text-center text-blue-600">👋 Hello, My name is</div>
        <div className="text-5xl text-center text-blue-700 font-bold">Hari Tody</div>
        <div className="text-3xl text-center text-blue-900 font-semibold">I`m a Fullstack Developer</div>
      </section>
      <section id="about" className="flex gap-20 bg-gray-100 py-24 px-36">
        <div>
          <div className="bg-white p-2">
            <Image width={1600} height={300} src="/portfolio/me.jpg" alt="scale" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="p-5 bg-white rounded-xl">
            <h2 className="font-bold text-2xl">About Myself</h2>
          </div>
          <div className="p-5 bg-white rounded-xl">
            <p>I`m a highly motivated person who is passionate about all things digital and programming. I`m bravely started switching my career from economic academic to the digital world, starting from UI/UX design and currently specializing as a Fullstack web developer.</p>
          </div>
          <div className="p-5 bg-white rounded-xl">
            <p>Beside of that, I like to travelling and photographing — taking picture of different places, reading book, playing musical instrument, watching movies, and sometimes playing games.</p>
          </div>
        </div>
      </section>
      <section id="works" className="py-40 px-20">
        <h1 className="text-center text-3xl font-bold mb-14">These are some my works</h1>
        <div className=" flex gap-16 justify-center">
          <a href="gojek" className="p-40 bg-green-600 rounded-lg text-white text-center max-w-xl">
            <h1 className="font-bold text-lg mb-3"> Slice Gojek</h1>
            <p className="text-white text-center">
              Replicate gojek`s website using Next.js
            </p>
          </a>
          <a href="exercise" className="p-40 bg-gray-600 rounded-lg text-white text-center max-w-xl">
            <h1 className="font-bold text-lg mb-3"> ToDo List</h1>
            <p className="text-white text-center">
              Create small ToDo list app using Next.js
            </p>
          </a>
        </div>
      </section>
      <section id="contact" className="flex flex-col gap-5 mt-16 mb-52">
        <div className="text-5xl text-center text-blue-700 font-bold">Let`s work together...</div>
        <div className="text-3xl text-center text-blue-900 font-semibold italic">how do you will reach me?</div>
        <div className="flex gap-5 items-center justify-center mt-10">
          <a href="https://www.linkedin.com/in/haritody/" className="underline font-semibold text-blue-900">LinkedIn</a>
          <a href="https://web.facebook.com/hartods/" className="underline font-semibold text-blue-900">Facebook</a>
          <a href="https://www.instagram.com/haritody/" className="underline font-semibold text-blue-900">Instagram</a>
          <a href="mailto:haritody@gmail.com" className="underline font-semibold text-blue-900">Gmail</a>
        </div>
      </section>
    </section>
  );
}
