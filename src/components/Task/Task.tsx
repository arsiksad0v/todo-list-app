import React from 'react';
import './Task.css';

interface TaskProps {
  id: string;
  text: string;
  onDelete: (id: string) => void;
}

const Task: React.FC<TaskProps> = ({ id, text, onDelete }) => {
  return (
    <div className="task">
      <span>{text}</span>
      <button onClick={() => onDelete(id)}>🗑️</button>
    </div>
  );
};

export default Task;