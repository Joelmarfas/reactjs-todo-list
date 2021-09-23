import React, { useState } from "react";
import styles from "./Input.module.scss";

export function Input(props) {
  const { taskToAdd } = props;
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    taskToAdd({
      done: false,
      id: new Date().toString(),
      description,
    });
    setDescription("");
  };

  const noTask = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    alert("no task");
  };

  return (
    <form className={styles.li} onSubmit={description ? handleSubmit : noTask}>
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
