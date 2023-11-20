import React, { useState, useEffect } from 'react';
import Task from './Task';

const TaskList = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

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

  return (
    <div>
      <h2>Lista de tareas</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Task
              name={task.title}
              completed={task.completed}
              onToggle={() => toggleTask(task.id)}
            />
            <button onClick={() => deleteTask(task.id)}>Eliminar</button>
            <button
              onClick={() => {
                const newTitle = prompt('Nuevo título:', task.title);
                const newDescription = prompt(
                  'Nueva descripción:',
                  task.description
                );
                if (newTitle !== null && newDescription !== null) {
                  editTask(task.id, newTitle, newDescription);
                }
              }}
            >
              Editar
            </button>
          </li>
        ))}
      </ul>
      <div>
        <button
          onClick={() => {
            const title = prompt('Título de la nueva tarea:');
            const description = prompt('Descripción de la nueva tarea:');
            if (title !== null && description !== null) {
              addTask(title, description);
            }
          }}
        >
          Agregar Tarea
        </button>
      </div>
    </div>
  );
};

export default TaskList;
