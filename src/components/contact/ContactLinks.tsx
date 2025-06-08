import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const ContactLinks = () => {
  const links = [
    {
      icon: faLinkedinIn,
      href: "https://www.linkedin.com/in/haritody/",
      label: "Linkedin"
    },
    {
      icon: faFacebook,
      href: "https://web.facebook.com/hartods/",
      label: "Facebook"
    },
    {
      icon: faInstagram,
      href: "https://www.instagram.com/haritody/",
      label: "Instagram"
    },
    {
      icon: faEnvelope,
      href: "mailto:haritody@gmail.com",
      label: "Gmail"
    }
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-16 my-10">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          className="contact-detail flex gap-3 items-center justify-center hover:text-blue-700 hover:text-xl duration-200"
        >
          <FontAwesomeIcon className="w-6" icon={link.icon} />
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default ContactLinks; 