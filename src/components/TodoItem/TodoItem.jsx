import React from "react";
import styles from "./TodoItem.module.scss";

export function TodoItem({ task }) {
  const { title } = task;
  return (
    <li className={styles.item}>
      <input type="checkbox" />
      {title}
    </li>
  );
}
