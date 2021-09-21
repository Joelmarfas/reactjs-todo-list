import React from "react";
import { FaBeer } from "react-icons/fa";
import styles from "./TodoItem.module.scss";

export function TodoItem({ task }) {
  const { title } = task;
  return (
    <li className={styles.item}>
      <FaBeer className={styles.fa} />
      <input type="checkbox" />
      {title}
    </li>
  );
}
