import { createContext, useState } from "react";

export const ThemeContext = createContext();

const getFromlocalStorage = () => {
  const value = localStorage.getItem("theme");
  return value || "light";
};
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(getFromlocalStorage);
  return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
};
