import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeToggle() {
  const { theme, toggle } = useContext(ThemeContext);
  console.log("Theme:", theme);

  return (
    <div
      className="theme__container"
      onClick={toggle}
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#0f172a" }
      }
    >
      <img src="../theme/sun.png" alt="" />
      <div
        className="ball"
        style={
          theme === "dark"
            ? { left: "1px", backgroundColor: "#0f172a" }
            : { right: "1px", background: "white" }
        }
      ></div>
      <img src="../theme/crescent-moon.png" alt="" />
    </div>
  );
}

export default ThemeToggle;
