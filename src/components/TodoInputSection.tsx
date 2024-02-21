import { ChangeEvent, useState } from "react";
import { useTodoContext } from "../context/useTodoContext";

const TodoInputSection = () => {
  const [newTask, setNewTask] = useState("");

  const { handleInputTask } = useTodoContext();

  function addTask() {
    if (newTask.trim() === "") return;

    handleInputTask(newTask.trim());

    setNewTask("");
  }

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement>
  ) {
    setNewTask(event.target.value);
  }

  return (
    <>
      <h1>To-Do-List</h1>
      <div>
        <input
          type='text'
          placeholder='Enter a task...'
          value={newTask}
          onChange={handleInputChange}
        />
        <button className='add-button' onClick={addTask}>
          Add
        </button>
      </div>
    </>
  );
};

export default TodoInputSection;
