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
            { id: 1, title: "Task 1" },
            { id: 2, title: "Task 2" },
            { id: 3, title: "Task 3" },
            { id: 4, title: "Task 4" },
            { id: 5, title: "Task 5" },
            { id: 6, title: "Task 6" },
          ]}
        />
      </main>
    </>
  );
}

export default App;
