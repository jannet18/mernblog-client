import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../src/userContext.js";
import ThemeToggle from "./components/ThemeToggle.jsx";
// import ThemeToggle from "./components/ThemeToggle.jsx";

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
    <div className="nav__container">
      {/* <header className="header"> */}
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
      <div className="logo">
        {" "}
        <Link to="/" className="logo">
          Bloggy
        </Link>
      </div>
      <div>
        <ThemeToggle />
      </div>

      <div className="nav__links">
        <Link to="/">Home</Link>
        <Link to="/">Contact</Link>

        <Link to="/">About</Link>
      </div>
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
