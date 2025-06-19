import React from "react";
import ExperienceCard from "./ExperienceCard";
import Title from "../common/Title";

const experiences = [
  {
    title: "Full-Stack Developer",
    company: "PT Pundi Mas Berjaya",
    period: "2022 - Present",
    responsibilities: [
      "Build and maintance 15+ Web Application using Laravel/Golang",
      "Design RestAPI/GraphQL for frontend/mobile developer using Laravel/Golang",
      "Manage database schemas and migrations in MySQL",
      "Optimize performance in backend systems, including database queries, API response times, and resource utilization",
      "Work closely with analysts, frontend, and mobile developers to collaborate about development",
    ],
  },
  {
    title: "Freelancer Web Development",
    company: "Self-Employed",
    period: "2022 - Present",
    responsibilities: [
      "Collaborated with clients to gather requirements and build its application.",
      "Designed and developed full-stack web applications using Laravel, Html-css-js, Golang, Next.js framework",
      "Maintenance running application, including bug fixing, performance optimization and security things",
    ],
  },
  {
    title: "Administrative Staff",
    company: "CV Karya Alam",
    period: "2018 - 2021",
    responsibilities: [
      "Handled administrative tasks related to sales",
      "Performed bookkeeping tasks and input data into Excel",
      "Handled customer orders via phone or in-person, providing information about products, services, and order status",
    ],
  },
];

const Experience = () => {
  return (
    <div>
      <Title title="My Experience" />
      <p className="text-center text-secondary text-lg mb-16 mt-4">
        Over 3 years of professional experience in software development,
        specializing in build web application.
      </p>
      <div className="space-y-8 mb-4">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            title={experience.title}
            company={experience.company}
            period={experience.period}
            responsibilities={experience.responsibilities}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
