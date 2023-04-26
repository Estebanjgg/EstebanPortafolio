import React, { useContext } from "react";
import styles from "./ThemeSwitcher.module.css";
import { ThemeContext } from './ThemeContext';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button className={`${styles.button} ${theme === "light" ? styles.light : ""}`} onClick={toggleTheme}>
      {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    </button>
  );
};

export default ThemeSwitcher;
