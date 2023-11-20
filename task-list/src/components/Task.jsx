import React from 'react';

function Task({ name, completed, onToggle }) {
  return (
    <div>
      <label>
        <input type="checkbox" checked={completed} onChange={onToggle} />
        {name}
      </label>
    </div>
  );
}

export default Task;