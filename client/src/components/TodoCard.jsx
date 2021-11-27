import React, { useContext } from "react";
import EditTodo from "./EditTodo";
import Context from "./todoContext";

const TodoCard = ({ todo }) => {
  const { todos, setTodos } = useContext(Context);

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`/todos/${id}`, {
        method: "DELETE",
      });

      setTodos(todos.filter((todo) => todo.todo_id !== id));
      console.log(deleteTodo);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="bg-orange-500 rounded shadow p-6 pb-10 w-64 m-4 relative break-all">
      <h5 className="text-black text-3xl font-bold mb-4 mt-0">
        {todo.description}
      </h5>
      <div className="absolute right-0 bottom-2 flex items-center">
        <EditTodo todo={todo} />
        <button
          className="mr-2 mt-2 px-4 py-0 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50"
          onClick={() => {
            deleteTodo(todo.todo_id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
