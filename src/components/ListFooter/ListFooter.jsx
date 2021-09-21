import React from "react";
import styles from "./ListFooter.module.scss";

export function ListFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.li}>4 Items left</div>
      <div className={styles.list}>
        <li className={styles.li}>All</li>
        <li className={styles.li}>Active</li>
        <li className={styles.li}>Completed</li>
      </div>
      <div className={styles.li}>Clear completed</div>
    </footer>
  );
}
