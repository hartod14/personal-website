import Image from "next/image";
import Link from "next/link";
import { limitString } from "@/utils/string";

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  description: string;
  techStack: string[];
  detailsLink: string;
  livePreviewLink?: string; // Optional
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageUrl,
  title,
  description,
  techStack,
  detailsLink,
  livePreviewLink,
}) => {

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden max-w-sm hover:-translate-y-2">
      <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
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
        <div className="flex justify-between items-center mt-auto">
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
          {livePreviewLink && (
            <Link
              href={livePreviewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 text-sm"
            >
              <svg
                className="w-4 h-4"
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
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 