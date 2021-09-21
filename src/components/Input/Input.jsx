import React from "react";
import { FaBeer } from "react-icons/fa";
import styles from "./Input.module.scss";

export function Input() {
  return (
    <>
      <li className={styles.li}>
        <FaBeer className={styles.fa} />
        <input className={styles.input} type="text" placeholder="New Task" />
      </li>
    </>
  );
}
