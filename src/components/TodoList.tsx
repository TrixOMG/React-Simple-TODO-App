import { useTodoContext } from "../context/useTodoContext";
import Task from "./Task";

const TodoList = () => {
  const { tasks } = useTodoContext();

  return (
    <div>
      <ol>
        {tasks.map((task, index) => (
          <Task task={task} index={index} />
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
