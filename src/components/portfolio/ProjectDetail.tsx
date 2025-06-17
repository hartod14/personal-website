import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ImageGallery from "@/components/common/ImageGallery";

interface ProjectDetailProps {
  title: string;
  shortDescription: string;
  techStack: string[];
  projectOverview: string;
  keyFeatures: string[];
  challengesAndSolutions: string;
  images: string[];
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  title,
  techStack,
  projectOverview,
  keyFeatures,
  challengesAndSolutions,
  images,
}) => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <Link href="/" className="text-blue-600 hover:text-blue-800 flex items-center mb-6">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2 w-4 h-4" />
          Back to Home
        </Link>

        <ImageGallery images={images} title={title} />

        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{title}</h1>

        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-medium text-gray-800 mb-3">Project Overview</h2>
          <p className="text-gray-700 leading-relaxed">{projectOverview}</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-medium text-gray-800 mb-3">Key Features</h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            {keyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-medium text-gray-800 mb-3">Challenges & Solutions</h2>
          <p className="text-gray-700 leading-relaxed">{challengesAndSolutions}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail; 