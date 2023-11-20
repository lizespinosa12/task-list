// components/TaskList.jsx
import React, { useState } from 'react';
import Task from './Task';
import useTask from '../hooks/useTask';

const TaskList = () => {
  const { tasks, addTask, deleteTask, editTask, toggleTask } = useTask();
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');

  const handleAddTask = () => {
    addTask(newTaskTitle, newTaskDescription);
    setNewTaskTitle('');
    setNewTaskDescription('');
  };

  return (
    <div>
      <h2>Describe tus tareas</h2>
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
        <input
          type="text"
          placeholder="Título de la nueva tarea"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descripción de la nueva tarea"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
        />
        <button onClick={handleAddTask}>Agregar Tarea</button>
      </div>
    </div>
  );
};

export default TaskList;
