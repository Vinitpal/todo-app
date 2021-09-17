import React, { useContext, useState } from "react";
import Context from "./todoContext";
import getTodos from "./useTodo";

const EditTodo = ({ todo }) => {
  const { setTodos } = useContext(Context);

  const [showModal, setShowModal] = useState(false);
  const [description, setDescription] = useState(todo.description);

  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(`/todos/${todo.todo_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await getTodos();
      setTodos(data);
      setShowModal(false);
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <div>
        <button
          className="mr-2 mt-2 px-4 py-0 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Edit
        </button>
      </div>
      <div
        className={`${
          showModal ? "scale-100" : "scale-0"
        } fixed top-0 left-0 z-20 w-screen h-screen flex items-center justify-center bg-gray-500 bg-opacity-50 transform transition-transform duration-300`}
      >
        <div className="bg-orange-500 rounded-md w-1/4 h-2/4 p-4">
          <button
            type="button"
            className="focus:outline-none"
            onClick={() => {
              setShowModal(false);
              setDescription(todo.description);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 hover:text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <div className="w-full mt-10 flex flex-col items-center justify-center">
            <input
              className="w-5/6 mb-4 p-1 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-black"
              type="text"
              value={description}
              placeholder="Type something ..."
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <button
              className="mx-4 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50"
              onClick={(e) => {
                updateDescription(e);
              }}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTodo;
