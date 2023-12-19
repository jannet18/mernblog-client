import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeToggle() {
  const { theme, toggle } = useContext(ThemeContext);
  console.log(theme, toggle);
  return (
    <div className="theme__container" onClick={toggle}>
      <img src="../theme/sun.png" alt="" />
      <div className="ball__circle"></div>
      <img src="../theme/crescent-moon.png" alt="" />
    </div>
  );
}

export default ThemeToggle;
