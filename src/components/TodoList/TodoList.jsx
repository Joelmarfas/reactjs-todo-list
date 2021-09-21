import React from "react";
import { ListFooter } from "../ListFooter/ListFooter";
import { TodoItem } from "../TodoItem/TodoItem";

export function TodoList() {
  return (
    <ul>
      <TodoItem />
      <ListFooter />
    </ul>
  );
}
