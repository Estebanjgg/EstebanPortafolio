import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const LightTheme = {
  backgroundColor: "#fff",
  color: "#020303",
};

export const DarkTheme = {
  backgroundColor: "#020303",
  color: "#fff",
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const savedTheme = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    setTheme(savedTheme || "light");
  }, []);

  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const currentTheme = theme === "light" ? LightTheme : DarkTheme;

  return (
    <ThemeContext.Provider value={{ theme, setTheme, currentTheme }}>
      {theme && <div style={currentTheme}>{children}</div>}
    </ThemeContext.Provider>
  );
};
