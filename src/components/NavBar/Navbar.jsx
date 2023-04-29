import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { IconButton, SvgIcon } from "@material-ui/core";
import { useTheme } from "../ThemeSwitcher/ThemeContext";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Navbar = () => {
  const { theme, setTheme, currentTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [themeButtonText, setThemeButtonText] = useState("Night");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setMenuOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


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
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      setThemeButtonText(newTheme === "light" ? "Night" : "Light"); // Cambia el nombre del botón al cambiar el tema
      return newTheme;
    });
  };
  const ThemeIcon = (props) => {
    return (
      <SvgIcon {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm-.89 10.65l.88-.89 1.76 1.76-.88.89z" />
      </SvgIcon>
    );
  }; 
  return (
    <nav
      className={styles.navbar}
      style={{
        backgroundColor: currentTheme.backgroundColor,
        color: currentTheme.color,
      }}
    >
      <div className={`${styles.hamburger} ${menuOpen ? styles.hide : ""}`}>
        <IconButton onClick={() => setMenuOpen(true)}>
          <MenuIcon style={{ fill: theme === "light" ? "#000" : "#f804d8" }} />
        </IconButton>
      </div>
      <div className={`${styles.close} ${menuOpen ? "" : styles.hide}`}>
        <IconButton onClick={() => setMenuOpen(false)}>
          <CloseIcon style={{ fill: theme === "light" ? "#000" : "#f804d8" }} />
        </IconButton>
      </div>
  
      <div className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
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
  
        <div
          className={`${styles.downloadButton} ${styles.downloadButtonAnimated}`}
        >
          <a href="/Portafolio.pdf" download onClick={handleDownloadClick}>
            Download Portfolio
          </a>
        </div>
  
        <IconButton onClick={toggleTheme} className={styles.themeButton} >
          <div style={{ display: "flex", alignItems: "right" }}>
            <ThemeIcon style={{ fill: theme === "light" ? "#000" : "#f804d8" }} />
            <span style={{ color: theme === "light" ? "#000" : "#f804d8" }}>
              {themeButtonText}
            </span>
          </div>
        </IconButton>
      </div>
  
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
