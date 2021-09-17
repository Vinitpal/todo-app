import React, { useContext, useEffect } from "react";
import TodoCard from "./TodoCard";
import Context from "./todoContext";
import getTodos from "./useTodo";

const ListTodos = () => {
  const { todos, setTodos } = useContext(Context);

  useEffect(() => {
    async function fetchData() {
      const data = await getTodos();
      console.log(data);

      setTodos(data);
      console.log(todos);
    }

    fetchData();
  }, [todos, setTodos]);

  return (
    <div className="mb-8">
      <div className="justify-items-center grid grid-flow-row grid-cols-4 gap-2">
        {todos.map((todo, i) => (
          <TodoCard todo={todo} key={todo.todo_id} />
        ))}
      </div>
    </div>
  );
};

export default ListTodos;
