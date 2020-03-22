import React from "react";

function CreateTodo({ createTodo }) {
  const handleSubmit = e => {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = Object.fromEntries(form);
    createTodo.bind(this, data)();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingresa actividad..."
        name="title"
        required
      />
      <button className="btn waves-effect waves-light" type="submit">
        Crear
      </button>
    </form>
  );
}
export default CreateTodo;
