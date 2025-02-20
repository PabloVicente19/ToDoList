import { useEffect, useState } from "react";

export default function useTaks() {

  const tasklist = JSON.parse(localStorage.getItem('tasks')) || [];

  const [tasks, setTasks] = useState(tasklist);

  const addTask = (tasksList) => {
    localStorage.setItem('tasks', JSON.stringify(tasksList));
  }

  useEffect(() => {
    addTask(tasks)
  }, [tasks])

  return [tasks, setTasks]
}

