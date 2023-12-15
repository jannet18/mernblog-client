import React, { useState } from "react";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function register(e) {
    e.preventDefault();
    const response = await fetch(`http://localhost:4000/register`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json, text/plain, */*",
      },
    });
    // catch errors
    if (response.status === 200) {
      alert("registration successful");
    } else {
      alert("registration failed");
    }
    // console.log(response);
  }
  return (
    <form action="" className="register" onSubmit={register}>
      <h1>Register</h1>
      <input
        // autoComplete="current-username"
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <input
        // autoComplete="current-password"
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button>Register</button>
    </form>
  );
};
