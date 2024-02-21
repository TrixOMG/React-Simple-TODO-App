import React, { useState } from "react";

type TodoContextType = {
  tasks: string[];
  setTasks: React.Dispatch<React.SetStateAction<string[]>>;
  handleInputTask: (newTask: string) => void;
  deleteTask: (index: number) => void;
  moveTaskUp: (index: number) => void;
  moveTaskDown: (index: number) => void;
};

interface TodoContextProviderProps {
  children: React.ReactNode;
}

export const TodoContext = React.createContext<
  TodoContextType | undefined
>(undefined);

export const TodoContextProvider: React.FC<TodoContextProviderProps> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<string[]>([
    "test",
    "text",
  ]);

  function handleInputTask(newTask: string) {
    setTasks([...tasks, newTask]);
  }

  //Actual State-changing functions
  function deleteTask(index: number) {
    const updatedTasks = tasks.filter(
      (_, idx) => idx !== index
    );
    setTasks(updatedTasks);
  }

  function moveTaskUp(index: number) {
    if (index === 0) return;
    const updatedTasks = [...tasks];

    [updatedTasks[index], updatedTasks[index - 1]] = [
      updatedTasks[index - 1],
      updatedTasks[index],
    ];

    setTasks(updatedTasks);
  }

  function moveTaskDown(index: number) {
    if (index === tasks.length - 1) return;
    const updatedTasks = [...tasks];

    [updatedTasks[index], updatedTasks[index + 1]] = [
      updatedTasks[index + 1],
      updatedTasks[index],
    ];

    setTasks(updatedTasks);
  }

  const value = {
    tasks,
    setTasks,
    handleInputTask,
    deleteTask,
    moveTaskUp,
    moveTaskDown,
  };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
};
