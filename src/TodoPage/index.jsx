import React, { useState, useEffect } from "react";
import axios from "axios";

const TodoPage = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://y9i2t5y7d2.execute-api.ap-northeast-2.amazonaws.com/master/api/todos"
      )
      .then((response) => {
        setTodos(response.data);
      });
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoPage;
