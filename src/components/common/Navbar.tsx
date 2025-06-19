"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className={`sticky top-0 z-20 bg-white/60 backdrop-blur-md transition-shadow duration-300 ${isSticky ? "shadow" : ""}`}
    >
      <div className="py-4 flex items-center justify-between text-black-900 px-4 md:px-20">
        <Image
          className="w-6 md:w-12"
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
            className="font-normal hover:-translate-y-1 hover:text-blue-600 transition-all duration-200"
            href="#about"
          >
            About
          </a>
          {/* <a
            className="font-normal hover:-translate-y-1 hover:text-blue-600 transition-all duration-200"
            href="#experience"
          >
            My Experience
          </a> */}
          <a
            className="font-normal hover:-translate-y-1 hover:text-blue-600 transition-all duration-200"
            href="#works"
          >
            Projects
          </a>
          <a
            className="font-normal hover:-translate-y-1 hover:text-blue-600 transition-all duration-200"
            href="/CV_HariTody_FullstackWebDev_2.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
        <a
          className="p-1.5 md:p-3 text-sm bg-blue-600 text-white rounded-md md:rounded-lg hover:bg-blue-700 transition-colors duration-200"
          href="#contact"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar; 