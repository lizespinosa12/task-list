import React from 'react';

const Task = ({ name, description, onToggle }) => {
  return (
    <div>
      <label>
        <input type="checkbox" onChange={onToggle} />
        <strong>{name}</strong>
      </label>
      <p>{description}</p>
    </div>
  );
};

export default Task;

