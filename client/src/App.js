import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";
import { TodoContext } from "./components/todoContext";

const App = () => {
  return (
    <TodoContext>
      <div className="App">
        <InputTodo />
        <ListTodos />
      </div>
    </TodoContext>
  );
};

export default App;
