import React from "react";
import Todo from "./Todo";

function Todos({ todos, deleteTodo, updateTodo }) {
  return todos.map((todo, index) => (
    <Todo
      todo={todo}
      key={index}
      deleteTodo={deleteTodo.bind(this, index)}
      updateTodo={updateTodo.bind(this, index)}
    />
  ));
}
export default Todos;
