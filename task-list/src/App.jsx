import React from 'react';
import './styles/styles.css';
import Header from './components/Header';
import TaskList from './components/TaskList';
import useTaskManager from './hooks/useTaskManager';


function App() {
  const { tasks, addTask, deleteTask, updateTask } = useTaskManager();

  return (
    <div className="App">
      <Header />
      <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} addTask={addTask} />
    </div>
  );
}

export default App;
