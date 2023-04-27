import React, { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Navbar = () => {
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

  return (
    <nav className={styles.navbar}>
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
          Descargar Portafolio
        </a>
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
          La descarga comenzará pronto...
        </Alert>
      </Snackbar>
    </nav>
  );
};

export default Navbar;
