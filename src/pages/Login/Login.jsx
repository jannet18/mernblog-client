import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../../userContext";

const Login = ({ logout }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { userInfo, setUserInfo } = useContext(UserContext);

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
      })
        .then((response) => response.json())
        .then((data) => {
          setUserInfo(userInfo);
          console.log(data);
          setRedirect(true);
        });
      // await response => response.json()
      // if (((await response) && response).ok) {
      //   response.json().then(() => {
      //     setUserInfo(userInfo);
      //     alert("login successful");
      //     setRedirect(true);
      //   });
      // } else {
      //   alert("login failed");
      //   // response && response.status(400).json("wrong credentials");
      // }
    }
  }

  if (redirect) {
    return (
      <>
        <Navigate to="/" />
        <nav>
          {" "}
          {username && (
            <>
              {/* <span>Hello, {username}</span> */}
              <Link to="/create">
                <button>Create new post</button>
              </Link>
              <a href="/" onClick={logout}>
                <button>Logout{username}</button>
              </a>
            </>
          )}
        </nav>
      </>
    );
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
