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
  const [title, setTitle] = useState("");
  const [modelId, setModelId] = useState(0);
  const [description, setDescription] = useState("");

  const API_URL =
    "https://81c2dplej4.execute-api.ap-northeast-2.amazonaws.com/master/todo";

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
      const headerAuth = { headers: { Authorization: idToken } };
      const response = await axios.get(API_URL, headerAuth);
      setTodos(response.data);
      setModelId(response.data.Items.length + 2);
    };
    fetchData();
  }, [idToken]);

  const handleCreateTodo = () => {
    const todo = { action: "create", id: modelId, title, description };
    const headerAuth = { headers: { Authorization: idToken } };
    console.log(todo);
    axios.post(API_URL, todo, headerAuth).then((response) => {
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
        {todos.Items && todos.Items.length > 0
          ? todos.Items.map((todo) => (
              <li key={todo.id}>
                {todo.title}
                <button onClick={() => handleDeleteTodo(todo.id)}>
                  Delete
                </button>
              </li>
            ))
          : ""}
      </ul>
      <form>
        <input type="text" placeholder="id" value={modelId} />
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />{" "}
        {/* <-- Add onChange here */}
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />{" "}
        {/* <-- Add onChange here */}
        <input type="button" value="Create" onClick={handleCreateTodo} />
      </form>
    </div>
  );
};

export default TodoPage;
