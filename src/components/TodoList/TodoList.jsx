import React from "react";
import { ListFooter } from "../ListFooter/ListFooter";
import { TodoItem } from "../TodoItem/TodoItem";
import styles from "./TodoList.module.scss";

export function TodoList({ todos }) {
  return (
    <ul className={styles.TodoList}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} task={todo} />
      ))}
      <ListFooter />
    </ul>
  );
}
