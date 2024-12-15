"use client"

import { useState } from 'react';

interface Task {
  id: any;
  text: string;
  completed: boolean
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [taskInput, setTaskInput] = useState<string>('');

  // useEffect(()=> {
  //   alert('Success add task')
  // },[tasks])

  //ADD TASK
  const addTask = () => {
    setTasks([...tasks, { id: Date.now(), text: taskInput, completed: false }])
    // tasks.push({ id: Date.now(), text: taskInput, completed: false });
    // setTasks(tasks);
    setTaskInput('')
  }

  //DELETE TASK
  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //REASSIGN DONE TASK
  const toogleTaskCompleted = (id: number) => {
    setTasks(
      tasks.map((task) => task.id == id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  return (
    <div>
      <div className="bg-black text-white h-screen flex items-center justify-center">
        <div className="border w-1/2">
          <h1 className="p-10 text-center font-bold text-3xl mb-5">Chores ToDo List</h1>
          <div className="flex flex-col gap-5 px-10">
            {tasks.map((task) => (
              <div key={task.id} id={task.id} className="flex gap-5">
                <div className="flex items-center justify-between w-full gap-10 mb-4">
                  <div className="">
                    <input
                      name="checkbox"
                      id={`cb-${task.id}`}
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toogleTaskCompleted(task.id)}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor={`cb-${task.id}`} className="ms-10 text-lg font-medium mt-1">{task.text}</label>
                  </div>
                  <div onClick={() => deleteTask(task.id)} className="p-2 border border-red-300 rounded-lg cursor-pointer">
                    <svg className="w-6 h-6 text-red-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <hr />
          <div className="p-10">
            <h1 className="text-center font-bold text-3xl mb-5">Done : {tasks.filter((task) => task.completed).length}/{tasks.length}</h1>
            <div>
              <label
                htmlFor="input"
                className="block mb-2 text-lg font-medium">Add todo</label>
              <input
                type="text"
                id="input"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
              />
            </div>
            <button onClick={addTask} className="py-3 px-5 rounded-lg bg-blue-300 text-black font-bold mt-5">ADD TASK</button>
          </div>
        </div>
      </div>
    </div>
  );
}
