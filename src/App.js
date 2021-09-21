import React from "react";
import { Input } from "./components/Input/Input";
import { Title } from "./components/Title/Title";
import { TodoList } from "./components/TodoList/TodoList";

function App() {
  return (
    <>
      <Title />
      <Input />
      <TodoList />
    </>
  );
}

export default App;
