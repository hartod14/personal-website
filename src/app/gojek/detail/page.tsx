import Link from "next/link";

export default function DetailGojek() {
    return (
        <div className="overflow-x-hidden container px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-10 mx-auto">
            <Link
                href="/"
                className="flex items-center text-blue-600 mb-6 text-lg font-semibold hover:text-blue-700 transition duration-200"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 12H5"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 5l-7 7 7 7"
                    />
                </svg>
                Back
            </Link>

            <div className="text-center">
                <h1 className="text-4xl font-bold text-blue-700 mb-6">Project: Slicing Gojek</h1>
                <p className="text-lg text-gray-700 mb-12">Technologies: Next.js, Tailwind CSS</p>
            </div>

            <div className="space-y-10">
                <div className="mb-6">
                    <h2 className="text-3xl font-semibold text-blue-800">Situation</h2>
                    <p className="text-lg text-gray-700">
                        The goal of this project was to replicate the Gojek website for practice. Gojek, a popular on-demand services platform, has a sleek and responsive user interface that makes it an excellent candidate for web development practice.
                        The project involved creating a pixel-perfect clone of the homepage of Gojek, focusing on accurate layout, responsive design, and the integration of functional components like sliders.
                    </p>
                </div>

                <div className="mb-6">
                    <h2 className="text-3xl font-semibold text-blue-800">Task</h2>
                    <div className="text-lg text-gray-700">
                        I was tasked with building a static replica of the Gojek homepage using Next.js and Tailwind CSS. The main objectives were to:
                        <ul className="list-disc pl-6 mt-2 text-gray-700">
                            <li>Replicate the homepage layout using Tailwind CSS</li>
                            <li>Implement a working slider component</li>
                            <li>Ensure that the website was responsive across different screen sizes</li>
                        </ul>
                    </div>
                </div>

                <div className="mb-6">
                    <h2 className="text-3xl font-semibold text-blue-800">Action</h2>
                    <div className="text-lg text-gray-700">
                        To achieve this, I began by setting up a Next.js project and integrated Tailwind CSS for styling. I meticulously replicated the layout, ensuring that the sections, typography, and elements matched the original design.
                        I also faced challenges in implementing the slider component but used a combination of React hooks and Tailwind utilities to achieve a smooth and functional slider.
                        Key steps I followed:
                        <ul className="list-disc pl-6 mt-2 text-gray-700">
                            <li>Set up the Next.js environment and install dependencies</li>
                            <li>Used Tailwind's utility classes for layout and styling</li>
                            <li>Implemented a slider component using React state to handle transitions</li>
                            <li>Tested the site across different screen sizes to ensure responsiveness</li>
                        </ul>
                    </div>
                </div>

                <div className="mb-6">
                    <h2 className="text-3xl font-semibold text-blue-800">Result</h2>
                    <div className="text-lg text-gray-700">
                        The project was successfully completed within two days, achieving a responsive and pixel-perfect replica of the Gojek homepage. The slider component worked seamlessly, and the site was fully responsive, adapting to different screen sizes without any issues.
                        The result was an effective hands-on exercise in Next.js and Tailwind CSS, providing valuable experience in building modern web applications with these tools.
                        <ul className="list-disc pl-6 mt-2 text-gray-700">
                            <li>Completed the project in 2 days</li>
                            <li>Achieved a pixel-perfect layout</li>
                            <li>Built a responsive design for all screen sizes</li>
                            <li>Successfully integrated a slider component</li>
                        </ul>
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className="text-3xl font-semibold text-blue-800">Project Visuals</h2>
                    <div className="flex flex-wrap gap-8 mt-6 w-full">
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <img src="/gojek/gojek_work.jpg" alt="Project Screenshot 1" className="w-full h-64 object-cover" />
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <img src="/gojek/gojek2.jpg" alt="Project Screenshot 2" className="w-full h-64 object-cover" />
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <img src="/gojek/gojek3.jpg" alt="Project Screenshot 3" className="w-full h-64 object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
