import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { UserContext } from "../../userContext.js";
import ThemeToggle from "../ThemeToggle.jsx";

export default function Header({ token }) {
  const [open, setOpen] = useState(false);
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
    <div className="nav__container">
      <div className="social">
        <Link>
          <img
            className="social_icon"
            src="../icons/facebook.png"
            alt="facebook"
          />
        </Link>
        <Link>
          <img
            className="social_icon"
            src="../icons/instagram.png"
            alt="instagram"
          />
        </Link>
        <Link>
          <img
            className="social_icon"
            src="../icons/twitter.png"
            alt="twitter"
          />
        </Link>
        <Link>
          <img
            className="social_icon"
            src="../icons/tik-tok.png"
            alt="tiktok"
          />
        </Link>
        <Link>
          <img
            className="social_icon"
            src="../icons/youtube.png"
            alt="/youtube"
          />
        </Link>
      </div>
      {/* <div className="nav__menu"> */}
      {/* <div className="burger_menu"> */}
      {/* <div className="menu_logo"> */}
      <div className="logo">
        {" "}
        <Link to="/" className="logo">
          Bloggy
        </Link>
      </div>
      {/* </div> */}

      <div className="nav__links">
        <ThemeToggle />
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/">
          Contact
        </Link>

        <Link className="link" to="/">
          About
        </Link>
      </div>

      <div className="burger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      {/* </div> */}
      {open && (
        <div className="responsiveMenu">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/">
            Contact
          </Link>

          <Link className="link" to="/">
            About
          </Link>
        </div>
      )}
      {username ? (
        <div className="header_btn">
          {/* <div className="header_btn"> */}
          {<Link to="/create">
            <button>Create new post</button>
          </Link> ? (
            <a href="/" onClick={logout}>
              <button>Logout{username}</button>
            </a>
          ) : (
            <Link to="/create">
              <button>Create new post</button>
            </Link>
          )}
        </div>
      ) : (
        <div className="header_btn">
          {<Link to="/login">
            <button>Login</button>
          </Link> ? (
            <Link to="/register">
              <button>Register</button>
            </Link>
          ) : (
            <Link to="/login">
              <button>Login</button>
            </Link>
          )}
        </div>
      )}
      {/* // </div> */}

      {/* <nav>
            {!username && (
              <>
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
          </nav> */}
    </div>
  );
}
