// hooks/useTask.js
import { useState } from 'react';

const useTask = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, description) => {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId, newTitle, newDescription) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, title: newTitle, description: newDescription }
          : task
      )
    );
  };

  const toggleTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return { tasks, addTask, deleteTask, editTask, toggleTask };
};

export default useTask;
