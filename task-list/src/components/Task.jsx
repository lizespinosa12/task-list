// components/Task.jsx
import React from 'react';
import { FaCheck, FaEdit, FaTrash } from 'react-icons/fa';

function Task({ name, description, completed, onToggle, onEdit, onDelete }) {
  return (
    <div>
      <label style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        <input type="checkbox" checked={completed} onChange={onToggle} />
        {name}
      </label>
      {description && <p>{description}</p>}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <span onClick={onEdit} style={{ marginRight: '8px', cursor: 'pointer' }}>
          <FaEdit />
        </span>
        <span onClick={onDelete} style={{ marginLeft: '8px', cursor: 'pointer' }}>
          <FaTrash />
        </span>
      </div>
    </div>
  );
}

export default Task;
