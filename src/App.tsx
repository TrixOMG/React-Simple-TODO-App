import "./App.css";
import TodoInputSection from "./components/TodoInputSection";
import TodoList from "./components/TodoList";

// TODO:
// [X] Create "Task" component
// [X] Implement React Context
// [ ] Implement DND functionality

function App() {
  return (
    <div className='to-do-list'>
      <TodoInputSection />
      <TodoList />
    </div>
  );
}

export default App;
