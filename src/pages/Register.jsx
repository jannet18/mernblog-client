import React, { useState } from "react";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function register(e) {
    e.preventDefault();
    if (username && password) {
      await fetch("http://localhost:4000/register", {
        method: "POST",
        body: JSON.stringify({
          username,
          password,
        }),
        headers: { "Content-Type": "application/json; charset=UTF-8" },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    }
    // const options = {
    //   Methods: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   // body: JSON.stringify({ username, password }),
    // };
    // await fetch("http://localhost:4000/register", options).then((res) => {
    //   console.log(res);
    // });
    // console.log(response);
  }

  return (
    <form action="" className="register" onSubmit={register}>
      <h1>Register</h1>
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
      <button>Register</button>
    </form>
  );
};
