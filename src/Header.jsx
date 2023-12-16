import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  // get current user
  // const [userInfo, setUserInfo] = useState(null);
  const [username, setUsername] = useState(null);
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    })
      .then((response) => {
        response.json();
      })
      .then((userInfo) => {
        // setUserInfo(userInfo?.username);
        setUsername(userInfo?.username);
      });
  }, []);

  function logout() {
    // invalidate the cookie
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
  }

  // const username = userInfo?.username;
  // console.log(loggedout);
  return (
    <header>
      <Link to="/" className="logo">
        Bloggy
      </Link>

      <nav>
        {username && (
          <>
            <Link to="/create">Create new post</Link>
            <a href="/" onClick={logout}>
              Logout ({username})
            </a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
      {/* <nav>
        {username && (
          <>
            <Link to="/create">Create new post</Link>
            <Link>
              <a href="/logout" onClick={logout}>
                Logout
              </a>
            </Link>
          </>
        )}

        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav> */}
    </header>
  );
}
