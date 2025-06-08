import React from 'react';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  period,
  responsibilities,
}) => {
  return (
    <div className="relative group bg-white p-8 border rounded-lg shadow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="absolute top-0 left-0 w-1 h-full bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="pl-4">
        <h2 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h2>
        <p className="text-lg text-gray-600">{company}</p>
        <p className="text-sm text-gray-500 mb-6">{period}</p>
        <ul className="space-y-2 list-disc list-inside text-gray-700">
          {responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard; 