import React, { useState, useContext } from "react";
import getTodos from "./useTodo";
import Context from "./todoContext";

const InputTodo = () => {
  const { setTodo } = useContext(Context);

  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      if (description.length > 0 && description.length <= 18) {
        const body = { description };
        const response = await fetch("/todos", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        console.log(response);
        setTodo(getTodos());
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className=" text-center py-8">
      <h1 className="text-4xl font-bold text-white">Todo App</h1>
      <form
        className="w-full mt-10 flex items-center justify-center"
        onSubmit={onSubmitForm}
      >
        <input
          className="w-4/12 p-1 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-black"
          type="text"
          value={description}
          placeholder="Type something ..."
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button className="mx-4 px-4 py-2 bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50">
          Add
        </button>
      </form>
    </div>
  );
};

export default InputTodo;
