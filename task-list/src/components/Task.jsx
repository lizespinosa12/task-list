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
      <div>
        <span onClick={onEdit}>
          <FaEdit style={{ marginRight: '8px', cursor: 'pointer' }} />
        </span>
        <span onClick={onDelete}>
          <FaTrash style={{ marginLeft: '8px', cursor: 'pointer' }} />
        </span>
      </div>
    </div>
  );
}

export default Task;
