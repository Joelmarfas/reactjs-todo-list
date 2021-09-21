import React from "react";
import { Input } from "./components/Input/Input";
import { Title } from "./components/Title/Title";
import { TodoList } from "./components/TodoList/TodoList";
import styles from "./App.module.scss";

function App() {
  return (
    <>
      <Title />
      <main className={styles.main}>
        <Input />
        <TodoList
          todos={[
            { id: 1, title: "tarea 1" },
            { id: 2, title: "tarea 2" },
            { id: 3, title: "tarea 3" },
          ]}
        />
      </main>
    </>
  );
}

export default App;
