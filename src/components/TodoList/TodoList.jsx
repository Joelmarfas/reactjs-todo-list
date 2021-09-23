import React from "react";
import styles from "./TodoList.module.scss";
// import { ListFooter } from "../ListFooter/ListFooter";
import { TodoItem } from "../TodoItem/TodoItem";

export function TodoList(props) {
  const { list, setList } = props;

  const onChangeStatus = (e) => {
    const { name, checked } = e.target;
    const updateList = list.map((item) => ({
      ...item,
      done: item.id === name ? checked : item.done,
    }));
    setList(updateList);
  };
  const onClickRemoveItem = () => {
    const updateList = list.filter((item) => !item.done);
    setList(updateList);
  };

  const chk = list.map((item) => (
    <TodoItem key={item.id} data={item} onChange={onChangeStatus} />
  ));
  return (
    <ul className={styles.TodoList}>
      {list.length ? chk : "Can create your first todo to get started"}

      <p>{list.length} Items left</p>
      <p>{list.length} Items active</p>
      <p>{list.length} Items completed</p>

      <p>
        <button type="button" onClick={onClickRemoveItem}>
          Delete all done
        </button>
      </p>
    </ul>
  );
}
