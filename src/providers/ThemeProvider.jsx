import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeProvider({ children }) {
  const { theme } = useContext(ThemeContext);
  // controls when the rendering should occur
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (mounted) {
    return <div className={theme}>{children}</div>;
  }
  // if not mounted
  return null;
}

export default ThemeProvider;
