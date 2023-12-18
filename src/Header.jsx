import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../src/userContext.js";

export default function Header({ token }) {
  // get current user
  const { userInfo, setUserInfo } = useContext(UserContext);
  // const [username, setUsername] = useState(null);
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then(() => {
        setUserInfo({ userInfo });
      });
    });
  }, []);

  function logout() {
    // invalidate the cookie
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUserInfo(null);
  }
  // create
  const username = userInfo?.username;
  return (
    <header className="header">
      <Link to="/" className="logo">
        Bloggy
      </Link>

      <nav>
        {!username && (
          <>
            {/* <span>Hello, {username}</span> */}
            <Link to="/create">
              <button>Create new post</button>
            </Link>
            <a href="/" onClick={logout}>
              <button>Logout{username}</button>
            </a>
          </>
        )}{" "}
        {username && (
          <>
            <Link to="/login">
              <button>Login</button>
            </Link>
            <Link to="/register">
              <button>Register</button>
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
