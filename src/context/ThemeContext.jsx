import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

// stores state after refresh
const getFromLocalStorage = () => {
  if (typeof window !== undefined) {
    // const initialValue = localStorage.getItem("theme" || "default");
    const value = localStorage.getItem("theme");
    return value || "light";
  }
};
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });
  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
    // setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };
  console.log(typeof toggle);

  // update local storage as well
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme, toggle]);
  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
