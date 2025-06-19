import Image from "next/image";
import Title from "../common/Title";

interface Skill {
  name: string;
  image: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", image: "/portfolio/skills/react.png" },
      { name: "Next.js", image: "/portfolio/skills/next.png" },
      { name: "Tailwind CSS", image: "/portfolio/skills/tailwind.png" },
      { name: "Laravel ", image: "/portfolio/skills/laravel.png" },
      { name: "jQuery ", image: "/portfolio/skills/jquery.png" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", image: "/portfolio/skills/node.png" },
      { name: "Express.js", image: "/portfolio/skills/express.png" },
      { name: "Golang", image: "/portfolio/skills/golang.png" },
      { name: "PostgresSQL ", image: "/portfolio/skills/postgresql.png" },
      { name: "MySQL ", image: "/portfolio/skills/mysql.png" },
      { name: "GraphQL ", image: "/portfolio/skills/graphql.png" },
      { name: "TypeScript ", image: "/portfolio/skills/typescript.png" },
    ],
  },
  {
    title: "DevOps / Tools",
    skills: [
      { name: "Docker", image: "/portfolio/skills/docker.png" },
      { name: "Git", image: "/portfolio/skills/git.png" },
      { name: "Figma", image: "/portfolio/skills/figma.png" },
      { name: "Midtrans", image: "/portfolio/skills/midtrans.png" },
      { name: "cPanel", image: "/portfolio/skills/cpanel.png" },
    ],
  },
];

export default function Skills() {
  return (
    <div>
      <Title title="My Skills" />

      <div className="md:flex justify-center gap-20 mt-10">
        {skillCategories.map((category) => (
          <div key={category.title} className="mb-10 flex-1 max-w-[400px]">
            <h3 className="text-center text-secondary text-2xl font-semibold mb-6">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-10 items-center justify-center">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="relative text-center group flex flex-col items-center"
                >
                  <Image
                    src={skill.image}
                    width={70}
                    height={70}
                    alt={skill.name}
                    className="transition-transform duration-300 hover:scale-110"
                  />
                  <div className="mt-2 text-sm font-medium text-gray-900 md:hidden">
                    {skill.name}
                  </div>
                  <div className="hidden md:block absolute top-full z-50 left-1/2 transform -translate-x-1/2 mt-2 w-max text-sm font-medium text-white bg-gray-800 p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {skill.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
