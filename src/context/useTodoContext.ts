import { useContext } from "react";
import { TodoContext } from "./TodoContextProvider";

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error(
      "useTodoContext must be used within a TodoContextProvider"
    );
  }
  return context;
};
