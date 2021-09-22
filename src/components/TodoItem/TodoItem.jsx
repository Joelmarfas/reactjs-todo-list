import React from "react";
// import { TiDelete } from "react-icons/ti";
import styles from "./TodoItem.module.scss";

export function TodoItem({ task }) {
  const { title } = task;
  return (
    <li className={styles.item}>
      <input type="checkbox" className={styles.fa} />
      <div className={styles.div}>{title}</div>
      {/* <TiDelete className={styles.ti} /> */}
    </li>
  );
}
