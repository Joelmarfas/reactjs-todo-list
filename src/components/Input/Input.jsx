import React from "react";
import styles from "./Input.module.scss";

export function Input() {
  return (
    <>
      <li className={styles.li}>
        <input type="checkbox" className={styles.fa} />
        <input className={styles.input} type="text" placeholder="New Task" />
      </li>
    </>
  );
}
