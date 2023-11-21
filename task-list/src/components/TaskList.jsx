// components/TaskList.jsx
import React, { useState } from 'react';
import Task from './Task';
import useTask from '../hooks/useTask';

const TaskList = () => {
  const { tasks, addTask, deleteTask, editTask, toggleTask } = useTask();
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleAddTask = () => {
    addTask(newTaskTitle);
    setNewTaskTitle('');
  };

  return (
    <div>
      <h2>¿Cuáles son tus tareas?</h2>
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
                if (newTitle !== null) {
                  editTask(task.id, newTitle);
                }
              }}
            >
              Editar
            </button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Título de la nueva tarea"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <button onClick={handleAddTask}>Agregar Tarea</button>
      </div>
    </div>
  );
};

export default TaskList;
