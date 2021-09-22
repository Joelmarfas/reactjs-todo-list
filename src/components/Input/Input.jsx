import React, { useState } from "react";
import styles from "./Input.module.scss";

export function Input(props) {
  const { handleAddItem } = props;
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItem({
      done: false,
      id: (+new Date()).toString(),
      description,
    });
    setDescription("");
  };
  return (
    <form className={styles.li} onSubmit={handleSubmit}>
      <input type="checkbox" className={styles.fa} />
      <input
        type="text"
        className={styles.input}
        placeholder="New Task"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </form>
  );
}
