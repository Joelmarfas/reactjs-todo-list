import React from "react";

export function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li>d</li>
      ))}
    </ul>
  );
}

// con "rfc" lo importa por "default" pero es mejor hacerlo de forma nombrada con los backets. A la larga te ahorra bastantes problemas.
// Dentro de los paréntesis de la funcion Todolist metemos unos bracket con "todos" que es la array que va a recibr.
