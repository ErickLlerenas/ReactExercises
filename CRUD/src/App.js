import React, { useState, useEffect } from "react";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const json = await promise.json();
    json.splice(25);
    setTodos(json);
  };

  const deleteTodo = id => {
    var temp = [...todos];
    temp.splice(id, 1);
    setTodos(temp);
  };

  const updateTodo = id => {
    var temp = [...todos];
    temp[id].completed = !todos[id].completed;
    setTodos(temp);
  };

  const createTodo = t => {
    t.id = todos.length + 1;
    t.completed = false;
    var temp = [...todos];
    temp.push(t);
    setTodos(temp);
  };

  return (
    <div className="container">
      <CreateTodo createTodo={createTodo} />
      <Todos todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </div>
  );
}
export default App;
