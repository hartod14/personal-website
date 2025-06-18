import Image from "next/image";
import Link from "next/link";
import { limitString } from "@/utils/string";

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  description: string;
  techStack: string[];
  detailsLink: string;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageUrl,
  title,
  description,
  techStack,
  detailsLink,
  link,
}) => {

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden max-w-sm hover:-translate-y-2">
      <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          style={{ objectFit: 'cover' }}
          className="rounded-t-lg transition-transform duration-300 hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between gap-4">
          <Link
            href={detailsLink}
            className="text-blue-600 hover:text-blue-800 font-semibold flex items-center"
          >
            View Details
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </Link>
          {link && (
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 font-semibold flex items-center"
            >
              Live Demo
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 