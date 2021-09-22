import React from "react";
import { TiDelete } from "react-icons/ti";
import styles from "./TodoItem.module.scss";

export function TodoItem(props) {
  const {
    onChange,
    data: { id, description, done },
  } = props;
  return (
    <li className={styles.item}>
      <input
        className={styles.fa}
        name={id}
        type="checkbox"
        defaultChecked={done}
        onChange={onChange}
      />
      <div className={styles.div}>{description}</div>
      <TiDelete className={styles.ti} />
    </li>
  );
}
