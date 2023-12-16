import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    if (username && password) {
      const response = fetch("http://localhost:4000/login", {
        method: "POST",
        body: JSON.stringify({
          username,
          password,
        }),
        headers: { "Content-Type": "application/json; charset=UTF-8" },
        credentials: "include",
      });
      if (response) {
        alert("login successful");
        setRedirect(true);
      } else {
        alert("login failed");
        response.status(400).json("wrong credentials");
      }
    }
  }

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <form className="login" onSubmit={handleLogin}>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button>Login</button>
    </form>
  );
};
export default Login;
