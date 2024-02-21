import React from "react";
import { useTodoContext } from "../context/useTodoContext";

interface TaskProps {
  index: number;
  task: string;
}

const Task: React.FC<TaskProps> = ({ index, task }) => {
  const {
    deleteTask,
    moveTaskDown,
    moveTaskUp,
  } = useTodoContext();

  return (
    <li key={index}>
      <span className='text'>{task}</span>
      <button
        className='delete-button'
        onClick={() => deleteTask(index)}
      >
        Delete
      </button>
      <button
        className='move-button'
        onClick={() => moveTaskUp(index)}
      >
        🔼
      </button>
      <button
        className='move-button'
        onClick={() => moveTaskDown(index)}
      >
        🔽
      </button>
    </li>
  );
};

export default Task;
