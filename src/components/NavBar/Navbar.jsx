import React, { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { IconButton } from "@material-ui/core";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { useTheme } from "../ThemeSwitcher/ThemeContext";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Navbar = () => {
  const { theme, setTheme, currentTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const handleDownloadClick = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <nav className={styles.navbar} style={{ backgroundColor: currentTheme.backgroundColor, color: currentTheme.color }}>
      <div className={styles.links}>
        <Link href="/" legacyBehavior>
          <a>Home</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a>About</a>
        </Link>
        <Link href="/contact" legacyBehavior>
          <a>Contact</a>
        </Link>
        <Link href="/projects" legacyBehavior>
          <a>Projects</a>
        </Link>
      </div>

      <div className={`${styles.downloadButton} ${styles.downloadButtonAnimated}`}>
        <a href="/Portafolio.pdf" download onClick={handleDownloadClick}>
          Download Portfolio
        </a>
      </div>

      <IconButton onClick={toggleTheme}>
        {theme === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          top: "200px",
        }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Download will start soon...
        </Alert>
      </Snackbar>
    </nav>
  );
};

export default Navbar;
