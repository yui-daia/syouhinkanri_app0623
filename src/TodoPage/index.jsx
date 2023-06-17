import React, { useState, useEffect } from "react";
import Amplify, { Auth } from "aws-amplify";
import axios from "axios";

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [user, setUser] = useState();
  const [headers, setHeaders] = useState({
    Authorization: "",
  });
  const [idToken, setIdToken] = useState("");
  const API_URL =
    "https://1jpnxrh1h6.execute-api.ap-northeast-2.amazonaws.com/prod/test/v1";

  useEffect(() => {
    const fetchUser = async () => {
      const user = await Auth.currentAuthenticatedUser();
      setUser(user);
      const token = user.signInUserSession.idToken.jwtToken;
      setIdToken(token);
      //{headers: {"Authorization": idToken}}
      setHeaders({
        Authorization: `Bearer ${token}`,
      });
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (!idToken || idToken == "") return;
      console.log("id", idToken);
      const headerAuth = { headers: { Authorization: idToken } };
      const response = await axios.get(API_URL, headerAuth);
      setTodos(response.data);
    };
    fetchData();
  }, [idToken]);

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

export default TodoPage;
