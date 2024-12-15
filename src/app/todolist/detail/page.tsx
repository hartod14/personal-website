import Image from "next/image";
import Link from "next/link";

export default function DetailTodolist() {
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
                <h1 className="text-4xl font-bold text-blue-700 mb-6">To-Do List Project</h1>
                <p className="text-lg text-gray-700 mb-12">Technologies: Next.js, React (useState, useEffect), Tailwind CSS</p>
            </div>

            <div className="space-y-10">
                <div className="mb-6">
                    <h2 className="text-3xl font-semibold text-blue-800">Situation</h2>
                    <p className="text-lg text-gray-700">
                        The goal of this project was to build a simple To-Do List web app for practicing React hooks such as `useState` and `useEffect`. The app allows users to add tasks, mark them as completed, display progress (tasks done out of total), and delete tasks.
                    </p>
                </div>

                <div className="mb-6">
                    <h2 className="text-3xl font-semibold text-blue-800">Task</h2>
                    <div className="text-lg text-gray-700">
                        I was tasked with creating a to-do list application where users can:
                        <ul className="list-disc pl-6 mt-2 text-gray-700">
                            <li>Add tasks</li>
                            <li>Mark tasks as completed</li>
                            <li>Delete tasks</li>
                            <li>See task completion progress (completed/total)</li>
                        </ul>
                    </div>
                </div>

                <div className="mb-6">
                    <h2 className="text-3xl font-semibold text-blue-800">Result</h2>
                    <div className="text-lg text-gray-700">
                        The project was successfully completed within one day, providing hands-on practice with React hooks. The app was fully functional, allowing users to manage their tasks effectively and visually track progress.
                        <ul className="list-disc pl-6 mt-2 text-gray-700">
                            <li>Completed the project in 1 day</li>
                            <li>Built a responsive To-Do list with React hooks</li>
                            <li>Implemented task completion progress</li>
                            <li>Successfully persisted tasks in localStorage</li>
                        </ul>
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className="text-3xl font-semibold text-blue-800">Project Visuals</h2>
                    <div className="flex flex-wrap gap-8 mt-6 w-full">
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <Image width={1440} height={720} src="/todolist/todolist_work.jpg" alt="Project Screenshot 1" className="w-full h-64 object-cover" />
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <Image width={1440} height={720} src="/todolist/todolist2.jpg" alt="Project Screenshot 2" className="w-full h-64 object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
