import React, { useState, useEffect } from "react";
import Amplify, { Auth } from "aws-amplify";
import axios from "axios";

const TodoPage = () => {
  const [todos, setTodos] = useState([]);

  const user = Auth.currentAuthenticatedUser();
  const idToken = user.signInUserSession.idToken.jwtToken;
  const headers = { headers: { Authorization: idToken } };
  const API_URL =
    "https://1jpnxrh1h6.execute-api.ap-northeast-2.amazonaws.com/prod/test/v1";

  useEffect(async () => {
    axios.get(API_URL, headers).then((response) => {
      setTodos(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get(API_URL, headers).then((response) => {
      setTodos(response.data);
    });
  }, []);

  const handleCreateTodo = (todo) => {
    axios.post(API_URL, todo, headers).then((response) => {
      setTodos([...todos, response.data]);
    });
  };

  const handleUpdateTodo = (id, todo) => {
    axios.put(`${API_URL}/${id}`, todo, headers).then((response) => {
      setTodos(todos.map((t) => (t.id === id ? todo : t)));
    });
  };

  const handleDeleteTodo = (id) => {
    axios.delete(`${API_URL}/${id}`).then((response) => {
      setTodos(todos.filter((t) => t.id !== id));
    });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleCreateTodo}>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Description" />
        <input type="submit" value="Create" />
      </form>
    </div>
  );
};

export default TodoList;
