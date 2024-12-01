import Image from "next/image";
import Form from 'next/form'
import { Input } from "postcss";

export default function Home() {
  return (
    <div className="bg-black text-white h-screen flex items-center justify-center">
      <div className="border w-1/2">
        <h1 className="p-10 text-center font-bold text-3xl mb-5">Chores ToDo List</h1>
        <Form action="/input">
          <div className="flex flex-col gap-5 px-10">
            <div className="flex gap-5">
              <div className="flex items-center justify-between w-full gap-10 mb-4">
                <div className="">
                  <input
                    name="checkbox"
                    id="cb-1"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="cb-1" className="ms-10 text-lg font-medium mt-1">Create Guest Experience mobile check-in</label>
                </div>
                <div className="p-2 border border-red-300 rounded-lg">
                  <svg className="w-6 h-6 text-red-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex items-center justify-between w-full gap-10 mb-4">
                <div className="">
                  <input
                    name="checkbox"
                    id="cb-2"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="cb-2" className="ms-10 text-lg font-medium mt-1">Document curren CI/CD proccess</label>
                </div>
                <div className="p-2 border border-red-300 rounded-lg">
                  <svg className="w-6 h-6 text-red-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex items-center justify-between w-full gap-10 mb-4">
                <div className="">
                  <input
                    name="checkbox"
                    id="cb-3"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="cb-3" className="ms-10 text-lg font-medium mt-1">Platform Code Review for final Pillow-Talk release</label>
                </div>
                <div className="p-2 border border-red-300 rounded-lg">
                  <svg className="w-6 h-6 text-red-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex items-center justify-between w-full gap-10 mb-4">
                <div className="">
                  <input
                    name="checkbox"
                    id="cb-4"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="cb-4" className="ms-10 text-lg font-medium mt-1">Implement new Color Palette from Design Team</label>
                </div>
                <div className="p-2 border border-red-300 rounded-lg">
                  <svg className="w-6 h-6 text-red-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex items-center justify-between w-full gap-10 mb-4">
                <div className="">
                  <input
                    name="checkbox"
                    id="cb-5"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="cb-5" className="ms-10 text-lg font-medium mt-1">Fix Image uploading process for guest check-in</label>
                </div>
                <div className="p-2 border border-red-300 rounded-lg">
                  <svg className="w-6 h-6 text-red-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex items-center justify-between w-full gap-10 mb-4">
                <div className="">
                  <input
                    name="checkbox"
                    id="cb-6"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="cb-6" className="ms-10 text-lg font-medium mt-1">Provide on-boarding documentation</label>
                </div>
                <div className="p-2 border border-red-300 rounded-lg">
                  <svg className="w-6 h-6 text-red-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </Form>
        <hr />
        <div className="p-10">
          <h1 className="text-center font-bold text-3xl mb-5">Done : 0</h1>
          <Form action="/inputt">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-lg font-medium">Add todo</label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
              />
            </div>
          </Form>
          <button className="py-3 px-5 rounded-lg bg-blue-300 text-black font-bold mt-5">ADD TASK</button>
        </div>
      </div>
    </div>
  );
}
