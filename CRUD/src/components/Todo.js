import React from "react";

function Todo({ todo, deleteTodo, updateTodo }) {
  return (
    <div className="card">
      <div className="card-content">
        <p>
          <label>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={updateTodo}
            />
            {todo.completed ? <span>Done</span> : <span>To do</span>}
          </label>
        </p>
        <button
          className="red btn waves-effect waves-light"
          style={buttonStyle}
          onClick={deleteTodo}
        >
          <i className="material-icons">delete</i>
        </button>
        <span className="card-title">{todo.id}</span>
        <p>{todo.title}</p>
      </div>
    </div>
  );
}

const buttonStyle = {
  float: "right"
};
export default Todo;
