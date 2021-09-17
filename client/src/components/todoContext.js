import React, { useState } from "react";
const Context = React.createContext();

export default Context;

export function TodoContext({ children }) {
  const [todos, setTodos] = useState([]);

  return (
    <Context.Provider value={{ todos, setTodos }}>{children}</Context.Provider>
  );
}
