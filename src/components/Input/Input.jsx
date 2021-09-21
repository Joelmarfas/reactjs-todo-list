import React from "react";
import styles from "./Input.module.scss";

export function Input() {
  return (
    <>
      <input className={styles.input} type="text" placeholder="New Task" />
    </>
  );
}
