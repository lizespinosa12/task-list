import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, deleteTask, updateTask, addTask, toggleTask }) => {
  return (
    <div>
      <h2>Lista de tareas</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Task name={task.title} description={task.description} onToggle={() => toggleTask(task.id)} />
            <button onClick={() => deleteTask(task.id)}>Eliminar</button>
            <button
              onClick={() => {
                const newTitle = prompt('Nuevo título:', task.title);
                const newDescription = prompt('Nueva descripción:', task.description);
                if (newTitle !== null && newDescription !== null) {
                  updateTask(task.id, newTitle, newDescription);
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
