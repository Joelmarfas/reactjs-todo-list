import React, { useState } from "react";
import { Input } from "./components/Input/Input";
import { Title } from "./components/Title/Title";
import { TodoList } from "./components/TodoList/TodoList";
import styles from "./App.module.scss";

function App() {
  const [list, setList] = useState([]);

  const handleAddItem = (addItem) => {
    setList([...list, addItem]);
  };
  return (
    <>
      <Title />
      <main className={styles.main}>
        <Input taskToAdd={handleAddItem} />
        <TodoList list={list} setList={setList} />
      </main>
    </>
  );
}

export default App;
